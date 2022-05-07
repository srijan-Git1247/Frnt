// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEEPxCAhT_DHIaoKrOJvbXcR0jMmDpT4I",
  authDomain: "blooddonation-7225b.firebaseapp.com",
  projectId: "blooddonation-7225b",
  storageBucket: "blooddonation-7225b.appspot.com",
  messagingSenderId: "848418560140",
  appId: "1:848418560140:web:d6fa23503c0999254283a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);