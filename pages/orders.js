import { getSession } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { db } from '../firebase';
import { 
  doc, 
  collection, 
  getDocs, 
  query, 
  orderBy,
  getDoc
} from 'firebase/firestore';
import moment from 'moment';
import styles from '../styles/order.module.css';

const OrderPage = ({ orders, error }) => {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Your Orders</h1>
        
        {error ? (
          <div className={styles.error}>
            <h2>Error loading orders</h2>
            <p>{error}</p>
          </div>
        ) : session ? (
          <>
            <h2 className={styles.subtitle}>
              {orders.length === 0 
                ? "No orders found" 
                : `${orders.length} ${orders.length === 1 ? 'order' : 'orders'}`}
            </h2>
            
            {orders.length > 0 && (
              <div className={styles.ordersList}>
                {orders.map((order) => (
                  <div key={order.id} className={styles.orderCard}>
                    <div className={styles.orderHeader}>
                      <h3>Order # {order.id.substring(0, 8)}</h3>
                      <p className={styles.orderDate}>
                        {moment(order.timestamp?.toDate()).format('MMMM Do YYYY, h:mm a')}
                      </p>
                    </div>
                    
                    <div className={styles.orderDetails}>
                      <p><strong>Total:</strong> ${order.amount?.toFixed(2)}</p>
                      <p><strong>Shipping:</strong> ${order.amountShipping?.toFixed(2)}</p>
                      
                      <div className={styles.orderItems}>
                        <h4>Items:</h4>
                        {order.items?.map((item, index) => (
                          <div key={index} className={styles.orderItem}>
                            {/* {item.image && (
                              <img 
                                src={item.image} 
                                alt={item.name} 
                                width={80}
                                height={80}
                              />
                            )} */}
                            <div className={styles.itemDetails}>
                              <p>{item.quantity} × {item.name}</p>
                              <p>${item.price?.toFixed(2)}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className={styles.signInPrompt}>
            <h2>Please sign in to view your orders</h2>
          </div>
        )}
      </main>
    </div>
  );
};

export default OrderPage;

export async function getServerSideProps(context) {
    try {
      const session = await getSession(context);
  
      if (!session?.user?.email) {
        return { 
          props: { 
            orders: [], 
            error: 'Please sign in to view your orders' 
          } 
        };
      }
  
      const userEmail = session.user.email;
      
      // First verify Firebase connection
      try {
        await getDoc(doc(db, "test", "test")); // Simple test query
      } catch (firebaseError) {
        console.error("Firebase connection error:", firebaseError);
        return {
          props: {
            orders: [],
            error: 'Database connection failed. Please check your internet connection.'
          }
        };
      }
  
      const userDocRef = doc(db, 'users', userEmail);
      const userDoc = await getDoc(userDocRef);
  
      if (!userDoc.exists()) {
        return {
          props: {
            orders: [],
            error: 'No order history found for your account'
          }
        };
      }
  
      const ordersSnapshot = await getDocs(
        query(
          collection(userDocRef, 'orders'),
          orderBy('timestamp', 'desc')
        )
      );
  
      const orders = ordersSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        // Convert Firestore timestamp to JS date
        timestamp: doc.data().timestamp?.toDate() || null
      }));
  
      return {
        props: {
          orders: JSON.parse(JSON.stringify(orders)),
          error: null
        }
      };
  
    } catch (error) {
      console.error("Orders page error:", error);
      return {
        props: {
          orders: [],
          error: 'Failed to load orders. Please try again later.'
        }
      };
    }
  }