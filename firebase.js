import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// 1. ADD THIS IMPORT FOR THE DATABASE
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,        
  projectId: "auto-shop-47ff0",
  storageBucket: "auto-shop-47ff0.firebasestorage.app",
  messagingSenderId: "191697520508",
  appId: "1:191697520508:web:029ad75dd6a0f48bc606f9",
  measurementId: "G-B00YLLQMMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 2. INITIALIZE AND EXPORT THE DATABASE
export const db = getFirestore(app); 