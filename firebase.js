// import firebase from "firebase";
// const firebaseConfig = {
//     apiKey: "AIzaSyBWO8xphaiNkEBuR2cNtYC9gDo8QfqqLuE",
//     authDomain: "amozon-54e39.firebaseapp.com",
//     projectId: "amozon-54e39",
//     storageBucket: "amozon-54e39.firebasestorage.app",
//     messagingSenderId: "775341040537",
//     appId: "1:775341040537:web:d31b2518c3b1029a21a908"
//   };
//   const app = !firebase.apps.length
//     ? firebase.initializeApp(firebaseConfig)
//     : firebase.app();
//     const db = app.firestore();
//     export default db
// firebase.js
// firebase.js

// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore , enableNetwork} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Force Firestore to stay online
enableNetwork(db).catch((error) => {
  console.error("Error enabling Firestore network:", error);
});

export { db };