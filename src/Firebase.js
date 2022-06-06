// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth} from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJHlJ97q6PPZwjJucG7fQT_ldL94f475w",
  authDomain: "vidinfo-5ec00.firebaseapp.com",
  projectId: "vidinfo-5ec00",
  storageBucket: "vidinfo-5ec00.appspot.com",
  messagingSenderId: "411118957118",
  appId: "1:411118957118:web:26fc2bfc6ddd561420d76f",
  measurementId: "G-TFCX7DF2RC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
