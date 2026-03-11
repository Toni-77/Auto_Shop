// index.js
import { db } from './firebase.js';
import { collection, addDoc } from "https://www.gstatic.com";

async function addTestRepair() {
  try {
    const docRef = await addDoc(collection(db, "repairs"), {
      car: "Classic Mustang",
      issue: "Engine Tune-up",
      status: "In Garage",
      timestamp: new Date()
    });
    console.log("Success! Repair ID:", docRef.id);
  } catch (e) {
    console.error("Error: ", e);
  }
}

addTestRepair();