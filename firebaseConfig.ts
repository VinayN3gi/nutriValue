import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnL1cVtQ0pTNnC_rWnR--bSzDeqx-LQuE",
  authDomain: "socialapp-3461a.firebaseapp.com",
  projectId: "socialapp-3461a",
  storageBucket: "socialapp-3461a.appspot.com",
  messagingSenderId: "146620322374",
  appId: "1:146620322374:web:daf860df648a67f2067047",
  measurementId: "G-9E36PQV4PF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);

