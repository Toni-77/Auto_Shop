// 1. Only one set of imports at the top
import { db } from './firebase.js';
import { collection, addDoc } from "firebase/firestore";

// 2. Your first function
const addRepair = async () => {
  await addDoc(collection(db, "repairs"), {
    car: "Ford F-150",
    issue: "Oil Change",
    status: "Pending"
  });
};

// 3. Your second function
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

// 4. Actually call the function so it runs
addTestRepair();