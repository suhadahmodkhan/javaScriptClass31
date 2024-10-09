// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI6C_PEgcA99c8A-gUWuQjULTokan97Ps",
  authDomain: "donation-2259f.firebaseapp.com",
  projectId: "donation-2259f",
  storageBucket: "donation-2259f.appspot.com",
  messagingSenderId: "312386193239",
  appId: "1:312386193239:web:3c0870fa1f95b0fc3ae012"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth