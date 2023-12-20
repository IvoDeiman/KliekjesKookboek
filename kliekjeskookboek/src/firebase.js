// Import the functions you need from the SDKs you need
import 'firebase/firestore';
import firebase from "firebase/app";
import "firebase/auth"; // If you need authentication
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB6XJmw4tt_DGDmmgLJBDGBgo24k0hmiWA",
    authDomain: "kliekjes-kookboek-c2064.firebaseapp.com",
    databaseURL: "https://kliekjes-kookboek-c2064-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "kliekjes-kookboek-c2064",
    storageBucket: "kliekjes-kookboek-c2064.appspot.com",
    messagingSenderId: "234486169446",
    appId: "1:234486169446:web:9af70ef7e938995573d2a7",
    measurementId: "G-SNFK9TFLBW"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth(); // Export the authentication service if needed
export const db = app.firestore();

