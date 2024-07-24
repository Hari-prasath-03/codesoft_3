import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBHv_MF4c9NLZ1FjKj8FP-RhVeX5YNw4z8",
  authDomain: "blog-project-8d03c.firebaseapp.com",
  projectId: "blog-project-8d03c",
  storageBucket: "blog-project-8d03c.appspot.com",
  messagingSenderId: "586794952198",
  appId: "1:586794952198:web:f5d22ca5826a0b0de00587"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();