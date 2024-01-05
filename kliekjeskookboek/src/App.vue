<template>
  <div class="container">
    <Header title="Title"></Header>
    <button @click="created()">Add user</button>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import { collection, addDoc } from "firebase/firestore"
import db from './firebase/init.js'

export default {
  name: 'App',
  components: {
    Header
  },
  methods: {
    async createUser() {
      // 'users' collection reference
      const colRef = collection(db, 'users')
      // data to send
      const dataObj = {
        firstName: 'John',
        lastName: 'Doe',
        dob: '1990'
      }

      // create document and return reference to it
      const docRef = await addDoc(colRef, dataObj)

      // access auto-generated ID with '.id'
      console.log('Document was created with ID:', docRef.id)
    },
    created() {
      this.createUser();
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
</style>