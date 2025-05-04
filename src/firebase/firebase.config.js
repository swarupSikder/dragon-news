// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhYnWGmvwUCAboU22feq-j5hhHGwNBWtA",
  authDomain: "test-34fc0.firebaseapp.com",
  databaseURL: "https://test-34fc0-default-rtdb.firebaseio.com",
  projectId: "test-34fc0",
  storageBucket: "test-34fc0.firebasestorage.app",
  messagingSenderId: "970334985743",
  appId: "1:970334985743:web:ee24465e0645ae9ca28d7a",
  measurementId: "G-EY0TZCK7PN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;