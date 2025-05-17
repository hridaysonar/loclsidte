// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFswQhWg3KNr6PhcEEGnOENRN7LnAs82U",
  authDomain: "coffee-store-bfacd.firebaseapp.com",
  projectId: "coffee-store-bfacd",
  storageBucket: "coffee-store-bfacd.firebasestorage.app",
  messagingSenderId: "506235260015",
  appId: "1:506235260015:web:3ae3e63938d4b42f68119a",
  measurementId: "G-3MYL9GM42Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);