import { db } from './firebase.js';
import { collection, addDoc } from "firebase/firestore";

// Example: Saving a new repair job
const addRepair = async () => {
  await addDoc(collection(db, "repairs"), {
    car: "Ford F-150",
    issue: "Oil Change",
    status: "Pending"
  });
};

import { db } from './firebase.js';
import { collection, addDoc } from "firebase/firestore";

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