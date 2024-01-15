import {initializeApp} from "firebase/app";
import {collection, doc, getDoc, getDocs, getFirestore, setDoc} from 'firebase/firestore/lite';

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

    async getAllRecipes() {
        const recipes = [];
        const recipesCol = collection(this.db, 'recipes');
        await getDocs(recipesCol).then((data) => {
            data.forEach((recipe) => {
                recipes.push({id:recipe.id, ...recipe.data()})
            })
        })
        return recipes;
    }

    async getTags() {
        try {
            const recipesCol = collection(this.db, 'tags');
            const docSnap = await getDocs(recipesCol);

            // Extract tags from the documents
            return [].concat(...docSnap.docs.map(doc => doc.id));
        } catch (error) {
            console.error("Error fetching tags:", error);
            throw error;
        }
    }

    async addRecipe(data) {
        await setDoc(doc(this.db, "recipes", data.title), {
            description: data.description,
            ingredient: data.ingredients,
            tags: data.tags,
            preparation: data.preparation,
            rating: data.rating,
            owner: data.owner,
            image: data.image,
            preparationtime: data.preparationtime
        })
    }
    async getRecipes() {
        try {
            const recipesCol = collection(this.db, 'recipes');
            const docSnap = await getDocs(recipesCol);
            return [].concat(...docSnap.docs.map(doc => doc.data));
        }
        catch (error) {
            console.error("Error fetching document Recipes:", error);
            throw error; // Optional: Rethrow the error if you want to handle it elsewhere
        }

    }
    async getMeasurements() {
        try {
            const collectionRef = collection(this.db, 'measurements');
            const docSnap = await getDocs(collectionRef);

            // Extract document IDs from the query snapshot
            return [].concat(...docSnap.docs.map(doc => doc.id));
        } catch (error) {
            console.error("Error fetching document Measurements:", error);
            throw error;
        }
    }
}