<template>
    <div class="wrap">
        <img class="image" src="../assets/RegistrationImage.jpg" alt="RegistratieImage">
    </div>
    <div class="data-form" action="">
        <div class="form-header">
            <h1 class="title">Welkom in de keuken!</h1>
            <h2>Maak nu je account aan om je eigen kookboek te beginnen</h2>
        </div>
        <div class="form-fields">
            <label for="fname">Voornaam:</label>
            <input type="text" v-model="fname" id="fname" name="fname">
            <label for="lname">Achternaam:</label>
            <input type="text" v-model="lname" id="lname" name="lname">
            <label for="mail">E-mailadress:</label>
            <input type="text" v-model="mail" @input="updateMail">
            <label for="tell">Telefoonnummer:</label>
            <input type="text" v-model="tell" id="tell" name="tell">
            <label for="password">Wachtwoord:</label>
            <input type="password" v-model="password" @input="updatePassword">
            <label for="ww2">Herhaal Wachtwoord:</label>
            <input type="text" id="ww2" name="ww2">
        </div>

        <button @click="register">Submit</button>
    </div>
</template>

<script>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const mail = ref("");
const password = ref("");
const fname = ref("");
const lname = ref("");
const tell = ref("");

const updateMail = (event) => {
    mail.value = event.target.value;
};

const updatePassword = (event) => {
    password.value = event.target.value;
};

const register = () => {
    console.log(mail.value, password.value);
    createUserWithEmailAndPassword(getAuth(), mail.value, password.value)
        .then(() => {
            console.log("Account geregistreerd");
        })
        .catch((error) => {
            console.error(error);
            alert(error.message);
        });
};

export default {
    name: "RegisterPage",
    methods: {
        register,
        updateMail,
        updatePassword,
    },
    data() {
        return {
            fname,
            lname,
            tell,
        };
    },
};
</script>

<style>
.data-form {
    margin-top: 100px;
    margin-left: 700px;
}

.form-header {
    text-align: center;
    margin-bottom: 20px;
    font-family: Bitter, sans-serif;
}

.form-fields {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
    font-family: 'Work Sans, sans-serif', sans-serif;
}

.form-fields label {
    display: block;
    margin-bottom: 5px;
}

.title {
    font-size: 50px;
}

.image {
    position: absolute;
    width: 560px;
    height: auto;
    left: 0px;
    top: 115px;
    float: left;
    background: linear-gradient(240deg, rgba(255, 206, 112, 0.30) 30.28%, rgba(0, 0, 0, 0.00) 88.36%), #E4A428;
    background-blend-mode: normal, luminosity;
}
</style>
