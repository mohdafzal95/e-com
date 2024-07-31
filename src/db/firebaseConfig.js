// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';



// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAnV4Bix1sQk0L0LhVI4MLcPvCTn6-5yM8",
  authDomain: "telebot-b79e7.firebaseapp.com",
  projectId: "telebot-b79e7",
  storageBucket: "telebot-b79e7.appspot.com",
  messagingSenderId: "285137909737",
  appId: "1:285137909737:web:3a7f718d0f7b8836073d78",
  measurementId: "G-G0BN28W6HF"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
