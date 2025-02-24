// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsdAzzjx5HwADX8MIVPGxzQThYKzqcsFY",
  authDomain: "hchkje4jesus.firebaseapp.com",
  projectId: "hchkje4jesus",
  storageBucket: "hchkje4jesus.firebasestorage.app",
  messagingSenderId: "181493636890",
  appId: "1:181493636890:web:4f38f6ba52e8b79f1796a3",
  measurementId: "G-3YYH6XW2PZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore and export
const db = getFirestore(app);
export { db };