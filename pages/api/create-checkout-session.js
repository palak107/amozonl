
// // const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// // export default async (req, res) => {
// //   if (req.method !== 'POST') {
// //     return res.status(405).json({ error: 'Method not allowed' });
// //   }

// //   try {
// //     const { items, email } = req.body;
    

    
// //     // First, create products and prices for each item
// //     const lineItems = await Promise.all(items.map(async (item) => {
// //       // Create a product
// //       const product = await stripe.products.create({
// //         name: item.title || 'Product',
// //         description: item.description || '',
// //         // No images
      
// //       });
      
// //       // Create a price for the product
// //       const price = await stripe.prices.create({
// //         product: product.id,
// //         unit_amount: Math.round(item.price * 100),
// //         currency: 'usd',
// //       });
      
// //       // Return the price ID to be used in the checkout session
// //       return {
// //         price: price.id,
// //         quantity: 1,
// //       };
// //     }));

// //     // Create the checkout session with the price IDs
// //     const session = await stripe.checkout.sessions.create({
// //       payment_method_types: ["card"],
// //       line_items: lineItems,
// //       mode: 'payment',
// //       success_url: `${process.env.HOST}/success`,
// //       cancel_url: `${process.env.HOST}/checkout`,
// //       metadata: {
// //         email
// //       }
// //     });

// //     res.status(200).json({ id: session.id });
// //   } catch (error) {
// //     console.error('Error creating checkout session:', error);
// //     res.status(500).json({ error: error.message });
// //   }
// // };


// import { buffer } from "micro";
// import * as admin from "firebase-admin";
// import { getFirestore } from "firebase-admin/firestore";

// // Initialize Firebase
// const serviceAccount = require("../permission.json");

// const firebaseApp = !admin.apps.length 
//   ? admin.initializeApp({
//       credential: admin.credential.cert(serviceAccount),
//       databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
//     })
//   : admin.app();

// const db = getFirestore(firebaseApp);

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// const storeOrderInFirestore = async (session) => {
//   try {
//     // Validate required fields
//     if (!session?.id) {
//       throw new Error("Invalid session: Missing session ID");
//     }

//     const userEmail = session.customer_details?.email || 
//                      session.metadata?.email || 
//                      session.customer_email;
    
//     if (!userEmail) {
//       throw new Error("No email found in session");
//     }

//     console.log("Storing order for user:", userEmail);
    
//     // Get expanded session data with line items
//     const expandedSession = await stripe.checkout.sessions.retrieve(session.id, {
//       expand: ['line_items.data.price.product']
//     });

//     if (!expandedSession.line_items?.data) {
//       throw new Error("No line items found in session");
//     }

//     const orderRef = db.collection("users").doc(userEmail)
//                       .collection("orders").doc(session.id);

//     const orderData = {
//       id: session.id,
//       amount: session.amount_total / 100,
//       amount_shipping: session.total_details?.amount_shipping ? 
//                       session.total_details.amount_shipping / 100 : 0,
//       images: session.metadata?.images ? 
//               JSON.parse(session.metadata.images) : [],
//       items: expandedSession.line_items.data.map(item => ({
//         id: item.id,
//         name: item.price.product.name,
//         price: item.amount_total / 100,
//         quantity: item.quantity,
//         image: item.price.product.images?.[0] || null
//       })),
//       timestamp: admin.firestore.FieldValue.serverTimestamp(),
//       status: "completed",
//       customer_email: userEmail,
//       shipping: session.shipping_details || null,
//       payment_intent: session.payment_intent || null
//     };

//     // Write with retry logic
//     const maxRetries = 3;
//     let attempts = 0;
    
//     while (attempts < maxRetries) {
//       try {
//         await orderRef.set(orderData);
//         console.log(`✅ Order ${session.id} stored for ${userEmail}`);
//         return true;
//       } catch (error) {
//         attempts++;
//         if (attempts === maxRetries) throw error;
//         console.log(`Retrying Firestore write (attempt ${attempts})...`);
//         await new Promise(resolve => setTimeout(resolve, 1000 * attempts));
//       }
//     }
//   } catch (error) {
//     console.error("❌ Firestore write error:", error);
//     throw error;
//   }
// };

// export default async (req, res) => {
//   if (req.method !== "POST") {
//     res.setHeader("Allow", "POST");
//     return res.status(405).end("Method Not Allowed");
//   }

//   // Validate environment variables
//   if (!process.env.STRIPE_SECRET_KEY || !endpointSecret) {
//     console.error("Stripe environment variables not configured");
//     return res.status(500).json({ error: "Server configuration error" });
//   }

//   let event;
//   try {
//     const payload = await buffer(req);
//     const sig = req.headers["stripe-signature"];
//     event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
//   } catch (err) {
//     console.error(`❌ Webhook error: ${err.message}`);
//     return res.status(400).send(`Webhook Error: ${err.message}`);
//   }

//   // Handle successful payments
//   if (event.type === "checkout.session.completed") {
//     const session = event.data.object;
    
//     try {
//       await storeOrderInFirestore(session);
//       return res.status(200).json({ received: true });
//     } catch (err) {
//       console.error("❌ Order processing failed:", err);
//       return res.status(500).json({ error: err.message });
//     }
//   }

//   // Handle other event types if needed
//   console.log(`ℹ️ Unhandled event type: ${event.type}`);
//   return res.status(200).json({ received: true });
// };


import { buffer } from "micro";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Validate input
    const { items, email } = req.body;
    
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'No items provided' });
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    // Create line items
    const lineItems = items.map(item => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.title,
          description: item.description || '',
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: 1,
    }));

    // Create session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/checkout`,
      customer_email: email,
      metadata: {
        email,
        items: JSON.stringify(items.map(item => item.id))
      }
    });

    return res.status(200).json({ id: session.id });
  } catch (error) {
    console.error('Stripe error:', error);
    return res.status(500).json({ 
      error: error.message || 'Internal server error' 
    });
  }
};

export const config = {
  api: {
    bodyParser: true, // Let Next.js handle body parsing
  },
};