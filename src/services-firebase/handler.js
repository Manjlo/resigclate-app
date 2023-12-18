// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// Initialize Firebase
export default initializeApp(firebaseConfig);
export { initializeApp, firebaseConfig };
