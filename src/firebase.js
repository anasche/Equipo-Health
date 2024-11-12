// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVf9ZHrGYS9IAw6dL6eJ9eOQKyS8xqQGI",
  authDomain: "pos-landing-page-7c0a5.firebaseapp.com",
  projectId: "pos-landing-page-7c0a5",
  storageBucket: "pos-landing-page-7c0a5.firebasestorage.app",
  messagingSenderId: "360780814937",
  appId: "1:360780814937:web:58a8b17f755c51ce4aef48",
  measurementId: "G-87BTJ9ZZVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services for use in your components
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export default app;
