// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHvY2LLNPlZ7J6CTS-sHGTL2zHUMgSUus",
  authDomain: "e-commerce-526f6.firebaseapp.com",
  projectId: "e-commerce-526f6",
  storageBucket: "e-commerce-526f6.appspot.com",
  messagingSenderId: "277749919588",
  appId: "1:277749919588:web:7794ec91f84873253e5471"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);