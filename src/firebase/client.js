// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhbVte3JQJ6WyyV5AJVjf98YcD2NbaXg8",
  authDomain: "el-arte-de-leer.firebaseapp.com",
  projectId: "el-arte-de-leer",
  storageBucket: "el-arte-de-leer.appspot.com",
  messagingSenderId: "945407201314",
  appId: "1:945407201314:web:8887c363da005bebb63a7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)