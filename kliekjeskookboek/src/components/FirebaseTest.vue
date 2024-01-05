<template>
    <firebase>
        <div id="userContainer" class="firebaseContainer">
            <p>Firstname</p>
            <input type="text" ref="firstname" placeholder="Text">
            <p>Lastname</p>
            <input type="text" ref="lastname" placeholder="Text">
            <p>Email</p>
            <input type="text" ref="email" placeholder="Text">
            <p>Phone</p>
            <input type="text" ref="phone" placeholder="Text">
            <br>

            <Button @click="addUser()" text="Add user" color="green"></Button>
            <ul class="removeUserList">
                <li v-for="user in users" :key="user.firstName">
                    Name: {{ user.firstName || user.firstname }}&emsp;|&emsp;
                    ID: {{ user.userId }}&emsp;|&emsp;
                    <Button text="Remove user" @click="deleteUser(user.userId)" color="red"></Button>
                </li>
            </ul>
            <br>
        </div>
        
        <div id="recipeContainer" class="firebaseContainer">
            <Button @click="addRecipe()" text="Add recipe" color="green"></Button>
            <Button text="Remove recipe" color="red"></Button>
        </div>
    </firebase>
</template>

<script>
    import Button from './Button.vue';
    import { collection, addDoc, getDocs, query } from "firebase/firestore"
    import db from '../firebase/init.js'

    export default {
        name: 'TestHeader',
        components: {
            Button,
        },
        data() {
            return {
                users: []
            }
        },
        props: {
        },
        methods: {
            addUser() {
                const dataObj = {
                    firstname: this.$refs.firstname.value,
                    surname: this.$refs.lastname.value,
                    phone: this.$refs.phone.value,
                    email: this.$refs.email.value
                }
                this.createUser(dataObj);
            },
            deleteUser(id) {
                console.log(id);
            },
            async createUser(dataObj) {
                // 'users' collection reference
                const colRef = collection(db, 'users')

                // create document and return reference to it
                const docRef = await addDoc(colRef, dataObj)

                // access auto-generated ID with '.id'
                console.log('Document was created with ID:', docRef.id)
            },
            async getUsers() {
                const allUsers = await getDocs(query(collection(db, 'users')));
                
                allUsers.forEach((doc) => {
                    console.log(doc.id);
                    console.log(doc.data().firstname);
                    console.log("=======")

                    const user = {
                        userId: doc.id,
                        firstname: doc.data().firstname,
                        surname: doc.data().surname,
                        phone: doc.data().phone,
                        email: doc.data().email,
                    }

                    this.users.push(user)
                })
            },
            addRecipe() {
                console.log("addRecipe");
                this.getUsers();
            }
        }
    }
</script>

<style>
    .firebaseContainer {
        margin-bottom: 20px;
    }

    .removeUserList {
        background: grey;
        padding: 10px;
        list-style: none;
    }
</style>