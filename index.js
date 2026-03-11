// index.js
import { db } from './firebase.js';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// 1. Get a reference to the form
const contactForm = document.querySelector('.contact-form');
const submitBtn = document.getElementById('submit-btn');
const btnText = document.getElementById('btn-text');
const spinner = document.getElementById('spinner');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // 1. Start Loading (Disable button so they don't click twice)
  submitBtn.disabled = true;
  btnText.textContent = "Sending...";
  spinner.style.display = "inline-block";

  const customerData = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
    createdAt: serverTimestamp()
  };

  try {
    // 2. The Handshake with Firebase
    await addDoc(collection(db, "repairs"), customerData);
    
    // 3. Success State (Apply your colors and text here)
    spinner.style.display = "none";
    btnText.textContent = 'Request Sent ✓';
    submitBtn.style.background = '#27ae60'; // Your green color
    
    contactForm.reset();

    // 4. Optional: Reset button after 4 seconds
    setTimeout(() => {
      submitBtn.disabled = false;
      btnText.textContent = "Send Request";
      submitBtn.style.background = ""; // Back to original color
    }, 4000);

  } catch (error) {
    console.error("Firebase Error:", error);
    spinner.style.display = "none";
    btnText.textContent = "Error - Try Again";
    submitBtn.disabled = false;
  }
});

















// async function addTestRepair() {
//   try {
//     const docRef = await addDoc(collection(db, "repairs"), {
//       car: "Classic Mustang",
//       issue: "Vite/NPM Test",
//       status: "Success",
//       timestamp: new Date()
//     });
//     console.log("Success! ID:", docRef.id);
//   } catch (e) {
//     console.error("Error: ", e);
//   }
// }

// addTestRepair();