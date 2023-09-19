// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-d6153.firebaseapp.com",
  projectId: "blog-d6153",
  storageBucket: "blog-d6153.appspot.com",
  messagingSenderId: "348120673715",
  appId: "1:348120673715:web:2a04dd84a97c903ff92fc6"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);