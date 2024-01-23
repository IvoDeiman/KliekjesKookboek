<template>
  <div class="registration-content">
    <div class="reg-image-container">
      <img class="reg-image" src="../assets/img/registratie-side-img.jpeg" alt="">
    </div>
    <div class="registration-form-container" action="">
      <div class="form-header">
        <h1 class="form-title">Welkom in de keuken!</h1>
        <h3 class="form-subtitle">Maak nu je account aan en begin je eigen kookboek</h3>
      </div>
      <div class="form-fields">
        <div>
          <label class="register-field-description" for="fname">Voornaam:</label>
          <input class="register-input" placeholder="Ralf" type="text" v-model="fname" @input="updateFname">
        </div>
        <div>
          <label class="register-field-description" for="lname">Achternaam:</label>
          <input class="register-input" placeholder="van der Koek" type="text" v-model="lname" @input="updateLname">
        </div>
        <div>
          <label class="register-field-description" for="mail">E-mailadress:</label>
          <input class="register-input" placeholder="Ralf.v.d.koek@example.com" type="text" v-model="mail" @input="updateMail">
        </div>
        <div>
          <label class="register-field-description" for="tell">Telefoonnummer:</label>
          <input class="register-input" placeholder="9999-999-999" type="text" v-model="tell" @input="updateTell">
        </div>
        <div>
          <label class="register-field-description" for="password">Wachtwoord:</label>
          <font-awesome-icon @click="switchVisibility()" class="visibility-icon clickable"
                               :icon="['fas', passwordType === 'password' ? 'eye-slash' : 'eye']" />
          <input class="register-input" placeholder="wachtwoord" :type="passwordType" v-model="password" @input="updatePassword">
        </div>
        <div>
          <label class="register-field-description" for="ww2">Herhaal Wachtwoord:</label>
          <font-awesome-icon @click="switchVisibility2()" class="visibility-icon clickable"
                               :icon="['fas', passwordType2 === 'password' ? 'eye-slash' : 'eye']" />
          <input class="register-input" placeholder="wachtwoord" :type="passwordType2" v-model="ww2"  @input="updateWw2">
        </div>
        <div class="terms-and-conditions">
          <input type="checkbox" class="accept-checkbox">
          <span class="info-color">Ik accepteer de <a href="#">Algemene Voorwaarden</a></span>
        </div>
      </div>
      <div class="form-footer">
        <button class="register-btn" @click="register">account aanmaken</button>
        <p class="login-text">Heb je al een account? <router-link to="/login">Klik hier om in te loggen</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import router from "@/routers";

const mail = ref("");
const password = ref("");
const fname = ref("");
const lname = ref("");
const tell = ref("");
const ww2 = ref(""); 

const updateMail = (event) => {
    mail.value = event.target.value;
};

const updateFname = (event) => {
    fname.value = event.target.value;
};

const updateLname = (event) => {
    lname.value = event.target.value;
};

const updateTell = (event) => {
    tell.value = event.target.value;
};

const updatePassword = (event) => {
    password.value = event.target.value;
};

const updateWw2 = (event) => {
    ww2.value = event.target.value;
};

const register = () => {
    if (!fname.value || !lname.value || !mail.value || !tell.value || !password.value || !ww2.value) {
        alert("Vul alle velden in voordat je het formulier indient.");
        return;
    }
    
    if (password.value !== ww2.value) {
        alert("Wachtwoord en herhaalde wachtwoord moeten hetzelfde zijn.");
        return;
    }

    console.log(mail.value, password.value);
    createUserWithEmailAndPassword(getAuth(), mail.value, password.value)
        .then(() => {
            console.log("Account geregistreerd");
            router.push('/recipes')
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
      updateWw2,
      updateFname,
      updateLname,
      updateTell,
      switchVisibility() {
        this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
      },
      switchVisibility2() {
        this.passwordType2 = this.passwordType2 === 'password' ? 'text' : 'password'
      }
    },
    data() {
        return {
          passwordType: 'password',
          passwordType2: 'password',
          fname,
          lname,
          tell,
        };
    },
};
</script>

<style>

.accept-checkbox {
  width: 22px !important;
  height: 22px !important;
  margin-bottom: 3px;
  border-radius: 3px !important;
  color: #E4A428 !important;
}

.terms-and-conditions {
  margin-left: 168px;
}

.registration-content {
  padding: 75px 0 0 0;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1.5fr 0.5fr;
  margin: auto;
}

.registration-content span {
  margin-left: 10px;
}

.reg-image-container{
  background-color: #E4A428;
}

.reg-image {
  object-fit: cover;
  object-position: center;
  mix-blend-mode: luminosity;
  height: 70vh;
}

@media only screen and (min-width: 1750px){
  .reg-image {
    width: 50vw;
    height: 90vh;
  }
}
@media only screen and (max-width: 1500px){
  .registration-content {
    grid-template-columns: 1fr 2fr;
  }
}

.registration-form-container {
  display: grid;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 1100px) {
  .terms-and-conditions{
    margin-left: 0;
  }

  .registration-form-container{
    margin: 30px;
  }
}

.form-header {
  margin: 75px auto 50px;
  text-align: center;
  font-family: Bitter, sans-serif;
  color: #1E1E1E;
}

.form-footer {
  margin: 10px auto auto;
  text-align: center;
  font-family: Bitter, sans-serif;
  color: #1E1E1E;
}

.form-footer p {
  margin-top: 50px;
  margin-bottom: 50px;
}

.form-title {
  font-weight: 700;
  font-size: 50px;
}

.form-subtitle {
  font-weight: 400;
  font-size: 24px;
}

.form-fields div {
  margin-bottom: 25px;
}

.visibility-icon {
  position: absolute;
  margin-top: 22px;
  margin-left: 440px;
  font-size: 18px;
  color: #444444;
}

.clickable {
  cursor: pointer;
}

.register-field-description {
  display: inline-block;
  color: #444;
  font-family: Work Sans, sans-serif;
  font-size: 18px;
  font-style: normal;
  width: 140px;
  font-weight: 600;
  margin-right: 28px;
  line-height: normal;
}

.form-fields div .register-input {
  border-radius: 8px;
  background-color: #D6D6D64D;
  border: none;
  width: 480px;
  height: 60px;
}

.register-btn{
  font-family: Work Sans, sans-serif;
  font-weight: 500;
  background-color: #E4A428;
  color: #FFFFFF;
  font-size: 20px;
  width: 483px;
  height: 60px;
  border-radius: 8px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
}

.login-text {
  font-family: Work Sans, sans-serif;
}

.login-text a:hover, .info-color a:hover {
  color: #E4A428;
  text-decoration: underline;
}
</style>
