// Import the functions you need from the SDKs you need
// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: "auto-shop-v2",
  storageBucket: "auto-shop-v2.firebasestorage.app",
  messagingSenderId: "344660926490",
  appId: "1:344660926490:web:c8afbf0ddb7e745f4271a3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);