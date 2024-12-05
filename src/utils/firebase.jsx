// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTkHp7SIwDwmRwIgWzmCbn5bJ6c7ZHhYg",
  authDomain: "cp-netflix-gpt.firebaseapp.com",
  projectId: "cp-netflix-gpt",
  storageBucket: "cp-netflix-gpt.appspot.com",
  messagingSenderId: "709857103947",
  appId: "1:709857103947:web:a5f88f451fb2af8f0b3dce",
  measurementId: "G-CY9LVN3LN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()