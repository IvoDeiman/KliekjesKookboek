import {initializeApp} from "firebase/app";
import {doc, getDoc, getFirestore, collection, getDocs} from 'firebase/firestore/lite';
//collection,
export default class FirebaseService {
    // Your web app's Firebase configuration

    constructor() {
        //set config
        this.firebaseConfig = {
            apiKey: "AIzaSyB6XJmw4tt_DGDmmgLJBDGBgo24k0hmiWA",
            authDomain: "kliekjes-kookboek-c2064.firebaseapp.com",
            databaseURL: "https://kliekjes-kookboek-c2064-default-rtdb.europe-west1.firebasedatabase.app",
            projectId: "kliekjes-kookboek-c2064",
            storageBucket: "kliekjes-kookboek-c2064.appspot.com",
            messagingSenderId: "234486169446",
            appId: "1:234486169446:web:9af70ef7e938995573d2a7",
            measurementId: "G-FMFVD60PFW"
        };

        // Initialize Firebase
        this.app = initializeApp(this.firebaseConfig);
        this.db = getFirestore(this.app);

    }
    async getRecipeById(id) {
        const docRef = doc(this.db, "recipes", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            // docSnap.data() will be undefined in this case
            return "Recipe does not exist";
        }
    }
    async getRecipes() {
        const recipesCol = collection(this.db, 'recipes');
        const recipesSnapshot = await getDocs(recipesCol);

        return recipesSnapshot.docs.map(doc => doc.data());
    }

}

