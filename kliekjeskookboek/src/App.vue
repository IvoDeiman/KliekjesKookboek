<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import { firestore } from '@/firebase.js';


export default {
  data() {
    return {
      users: []  // To store the fetched users
    };
  },
  created() {
    // Reference to the 'users' collection
    const usersCollection = firestore.collection('users');

    // Fetch all documents from the 'users' collection
    usersCollection.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        // Push each document's data into the users array
        this.users.push(doc.data());
      });
    }).catch(error => {
      console.error("Error fetching data: ", error);
    });
  }
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
