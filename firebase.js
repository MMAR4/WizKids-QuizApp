// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT4tBbzeRln8UKwdZlTfVCoIG2LusS_s0",
  authDomain: "wizkids-46637.firebaseapp.com",
  projectId: "wizkids-46637",
  storageBucket: "wizkids-46637.firebasestorage.app",
  messagingSenderId: "402647825974",
  appId: "1:402647825974:web:817b32f3623a4eda812297"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 
export default app;