// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfKUUzaMhptqNyHSMA8UbXmEzjQ0jpOPI",
  authDomain: "provide-personalized-services.firebaseapp.com",
  projectId: "provide-personalized-services",
  storageBucket: "provide-personalized-services.appspot.com",
  messagingSenderId: "222062237265",
  appId: "1:222062237265:web:adda543aee9a8ea874ca70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;