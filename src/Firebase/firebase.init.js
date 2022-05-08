// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0Spiw71KeyfDB546AeFfLfhYaDOPdrPM",
    authDomain: "stokeify.firebaseapp.com",
    projectId: "stokeify",
    storageBucket: "stokeify.appspot.com",
    messagingSenderId: "98229860084",
    appId: "1:98229860084:web:1122219f6f0aa764fbd0a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth