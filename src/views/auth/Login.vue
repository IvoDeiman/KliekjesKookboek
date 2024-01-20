<script>
export default {
  name: "LoginPage",
  props: {
    msg: String
  },
  data() {
    return {
      passwordType: 'password'
    };
  },
  methods: {
    switchVisibility() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
    }
  },
}
</script>

<template>
  <div class="login-content">
    <img class="login-image" src="../../assets/login-image.png" alt="">
    <div class="login-container">
      <section class="login-section">
        <h1 class="login-title">Klaar om te koken?</h1>
        <h3 class="login-subtext">Log in om jouw recepten te bekijken</h3>
        <div class="login-form">
          <div class="flex items-center mb-[25px]">
            <div class="login-field-description">
              E-mailadres
            </div>
            <input class="login-input" placeholder="Ralf.v.d.koek@example.com">
          </div>
          <div class="flex items-center mb-[25px]">
            <div class="login-field-description">
              Wachtwoord
            </div>
            <div class="input-icons">
              <font-awesome-icon @click="switchVisibility()" class="visibility-icon clickable"
                                 :icon="['fas', passwordType === 'password' ? 'eye-slash' : 'eye']" />
              <input :type="passwordType" placeholder="Wachtwoord" class="login-input">
            </div>
          </div>
          <div class="user-options">
            <input type="checkbox" class="remember-checkbox"> <span class="info-color">Onthoud mij</span>
            <button class="btn-forgot-password">Wachtwoord vergeten?</button>
          </div>
        </div>
        <div class="button-wrapper">
          <button class="login-button">Inloggen</button>
        </div>
        <div class="options-wrapper mt-[61px]">
          <div class="spacer"></div>
          <div class="other-options mx-[58px]">
            Andere opties
          </div>
          <div class="spacer"></div>
        </div>
        <div class="options-wrapper mt-[20px]">
          <img class="me-[50px] clickable" src="../../assets/facebook-login-option.png" alt="Facebook Login">
          <img class="clickable" src="../../assets/google-login-option.png" alt="Google Login">
        </div>
        <div class="options-wrapper my-[41px]">
          <p class="register-text">Nog geen account? Geen probleem, hier kan je je registreren</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>

.login-image {
  width: 560px;
  height: 100%;
}

.login-content {
  padding: 20px 0 0 0 ;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: auto;
}

.login-section {
  margin-top: 100px;
}

.register-text {
  color: #444;
  font-family: Work Sans, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.clickable {
  cursor: pointer;
}

.visibility-icon {
  position: absolute;
  margin-top: 22px;
  margin-left: 440px;
  font-size: 18px;
  color: #444444;
}

.spacer {
  width: 202px;
  border: 1px solid rgba(0, 0, 0, 0.20);
}

.button-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 42px 0 0 28px;
}

.options-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.other-options {
  color: #444444;
  font-family: Bitter, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 78px; /* 390% */
}

.login-button {
  width: 483px;
  height: 60px;
  color: white;
  border-radius: 8px;
  background: #E4A428;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.25);
}

.login-container {
  margin: auto;
  font-family: Work Sans, sans-serif;
}

.login-title {
  color: #1E1E1E;
  text-align: center;
  font-family: Bitter, sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 78px; /* 156% */
}

.remember-checkbox {
  width: 22px;
  height: 22px;
  margin-bottom: 3px;
  border-radius: 3px !important;
  color: #E4A428 !important;
}

.btn-forgot-password {
  color: #444;
  margin-left: 140px;
  text-align: center;
  font-family: Work Sans, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.info-color {
  color: #444;
  font-family: Work Sans, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.login-subtext {
  color: #1E1E1E;
  text-align: center;
  font-family: Bitter, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0;
}

.login-form {
  margin-top: 41px;
  align-items: center;
}

.user-options {
  margin-left: 155px;
}

.login-field-description {
  color: #444;
  font-family: Work Sans, sans-serif;
  font-size: 18px;
  font-style: normal;
  width: 125px;
  font-weight: 600;
  margin-right: 28px;
  line-height: normal;
}

.login-input {
  border-radius: 8px;
  background: #D6D6D64D;
  border: none;
  width: 480px;
  height: 60px;
}
</style>
