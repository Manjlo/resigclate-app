// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseApp = initializeApp(firebaseConfig);
console.log(firebaseApp);
// Initialize Firebase
export default firebaseApp;
