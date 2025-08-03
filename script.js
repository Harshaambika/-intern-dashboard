// Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDgeI2Cmcxcp3Ccu4sKZ5_KIUW7ntFpgtM",
  authDomain: "intern-dashboard-d3ea0.firebaseapp.com",
  projectId: "intern-dashboard-d3ea0",
  storageBucket: "intern-dashboard-d3ea0.appspot.com",
  messagingSenderId: "49870633226",
  appId: "1:49870633226:web:e479388654a680a2c4a2f3",
  measurementId: "G-EV40SK9SEE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Handle form submission
document.getElementById("internForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from reloading page

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const referral = document.getElementById("referral").value;
  const amount = document.getElementById("amount").value;

  // Save data to Firestore
  db.collection("intern").add({
    name: name,
    email: email,
    referral: referral,
    amount: amount,
    submittedAt: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(() => {
    alert("Data submitted successfully!");
    document.getElementById("internForm").reset(); // Clear form
  })
  .catch((error) => {
    alert("Error submitting data: " + error.message);
    console.error("Firestore Error:", error);
  });
});




