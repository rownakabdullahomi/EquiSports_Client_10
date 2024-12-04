// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsAeoLcsBWBmB4eD_PZDsPPrl9E-ccR4c",
  authDomain: "equi-sports-414e7.firebaseapp.com",
  projectId: "equi-sports-414e7",
  storageBucket: "equi-sports-414e7.firebasestorage.app",
  messagingSenderId: "1052733606801",
  appId: "1:1052733606801:web:ae1e4f4706beeed6bc2830"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);