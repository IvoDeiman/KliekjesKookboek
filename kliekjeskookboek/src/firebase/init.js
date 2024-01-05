import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6XJmw4tt_DGDmmgLJBDGBgo24k0hmiWA",
  authDomain: "kliekjes-kookboek-c2064.firebaseapp.com",
  databaseURL: "https://kliekjes-kookboek-c2064-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "kliekjes-kookboek-c2064",
  storageBucket: "kliekjes-kookboek-c2064.appspot.com",
  messagingSenderId: "234486169446",
  appId: "1:234486169446:web:9af70ef7e938995573d2a7",
  measurementId: "G-FMFVD60PFW"
};

initializeApp(firebaseConfig);

const db = getFirestore();
export default db;