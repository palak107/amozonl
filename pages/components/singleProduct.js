// import React from 'react';
// import styles from '../../styles/singleProduct.module.css';
// import Image from 'next/image';
// import Navbanner from './nabar/navabrbelt/Nabarbanner/navbanner';
// import Navbarbelt from './nabar/navabrbelt/navbarbelt';
// import Rating from '../components/ratng'
// const SingleProduct = ({ SingleProduct }) => {
//     if (!SingleProduct || !SingleProduct.image) {
//         return <div>Image not available</div>; // Handle missing data
//     }

//     return (
//         <div>
//             <div>
//                 <Navbanner>
//                 </Navbanner>
//                 <Navbarbelt></Navbarbelt>
//             </div>
//             <div className={styles.product}>
//                 <div className={styles.image}>
//                 <Image
//                     src={SingleProduct.image}
//                     width={300}
//                     height={450}
//                     alt={SingleProduct.title || "Product Image"} // Use title if available
//                 />
//                 </div>
//                <div className={styles.info}><h1>{SingleProduct.title}</h1>
//               <div className={styles.information}>
          
//               <h2> ${SingleProduct.price}</h2>
//               <Rating rating={SingleProduct.rating}></Rating>
//               </div>
                
//                 <div>
//                     <h1>About this item</h1></div>

                
//                     <p>
//                     {SingleProduct.description}</p>   
                    
//                     </div>

//             </div>
//             <div></div>
            
//         </div>
//     );
// };

// export default SingleProduct;

import React from 'react';
import styles from '../../styles/singleProduct.module.css';
import Image from 'next/image';
import Navbanner from './nabar/navabrbelt/Nabarbanner/navbanner';
import Navbarbelt from './nabar/navabrbelt/navbarbelt';
import Rating from '../components/ratng';
import AddToCartContainer from '../components/addToCartContainer';
const SingleProduct = ({ SingleProduct }) => {
  if (!SingleProduct || !SingleProduct.image) {
    return <div>Image not available</div>; // Handle missing data
  }

  return (
    <div>
     
      <div className={styles.product}>
        <div className={styles.image}>
          <Image
            src={SingleProduct.image}
            width={300}
            height={450}
            alt={SingleProduct.title || 'Product Image'} // Use title if available
          />
        </div>
        <div className={styles.info}>
          <h1>{SingleProduct.title}</h1>
          <div className={styles.information}>
            <div style={{ display: 'flex', alignItems: 'center',gap:'40px' }}> {/* Added flex container */}
              <h2>${SingleProduct.price}</h2>
              <Rating rating={SingleProduct.rating}></Rating>
            </div>
          </div>

          <div> 
            <h1>About this item</h1>
          </div>

          <p className={styles.description}>{SingleProduct.description}</p>
        </div>
        <div>
        <AddToCartContainer
            id={SingleProduct.id}
            title={SingleProduct.title}
            image={SingleProduct.image}
            price={SingleProduct.price}
            description={SingleProduct.description}
            rating={SingleProduct.rating}
            prime={SingleProduct.prime}></AddToCartContainer>

     </div>
      </div>
     
    </div>
  );
};

export default SingleProduct;