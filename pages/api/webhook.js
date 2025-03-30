



// import { buffer } from 'micro';
// import Stripe from 'stripe';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export const config = {
//   api: {
//     bodyParser: false, // Stripe requires raw body
//   },
// };

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).send('Method Not Allowed');
//   }

//   const sig = req.headers['stripe-signature'];

//   let event;
//   try {
//     const rawBody = await buffer(req);
//     event = stripe.webhooks.constructEvent(
//       rawBody,
//       sig,
//       process.env.STRIPE_WEBHOOK_SECRET
//     );
//   } catch (err) {
//     console.error('Webhook Error:', err.message);
//     return res.status(400).send(`Webhook Error: ${err.message}`);
//   }

//   // Handle the event
//   switch (event.type) {
//     case 'checkout.session.completed':
//       console.log('✅ Checkout session completed:', event.data.object);
//       // Process order without including images
//       break;

//     case 'payment_intent.succeeded':
//       console.log('💰 PaymentIntent was successful:', event.data.object);
//       // Update order status in Firestore
//       break;

//     case 'charge.succeeded':
//       console.log('🔄 Charge succeeded:', event.data.object);
//       // Store charge details in Firestore
//       break;

//     case 'payment_intent.created':
//       console.log('🛠 PaymentIntent created:', event.data.object);
//       // Handle creation of PaymentIntent
//       break;

//     default:
//       console.log(`Unhandled event type: ${event.type}`);
//   }

//   res.json({ received: true });
// }
import { buffer } from 'micro';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = {
  api: {
    bodyParser: false, // Stripe requires raw body
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const sig = req.headers['stripe-signature'];

  let event;
  try {
    const rawBody = await buffer(req);
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook Error:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object; // Access session here
      console.log('✅ Checkout session completed:', session); // Log session
      // Process order without including images
      break;

    case 'payment_intent.succeeded':
      console.log('💰 PaymentIntent was successful:', event.data.object);
      // Update order status in Firestore
      break;

    case 'charge.succeeded':
      console.log('🔄 Charge succeeded:', event.data.object);
      // Store charge details in Firestore
      break;

    case 'payment_intent.created':
      console.log('🛠 PaymentIntent created:', event.data.object);
      // Handle creation of PaymentIntent
      break;

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  res.json({ received: true });
}