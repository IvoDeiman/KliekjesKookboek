<script>
import router from "@/routers";
import PrimaryButton from "@/components/PrimaryButton.vue";


export default {
  name: "FooterGeneral",
  components: {PrimaryButton},
  methods: {
    router() {
      return router
    }
  },
  props: {
    msg: String
  }
}
</script>
<template>
 <footer id="footer" class="flex">
   <img class="background" src="../assets/background-footer.png" alt="footer background">
   <div class="inner-footer">
     <div class="group">
       <p class="text-wrapper">© 2023 Kliekjes Kookboek Co., Ltd. All rights reserved</p>
       <div class="privacy-policy">Privacy Policy</div>
       <div class="text-wrapper-2">Terms of Service</div>
     </div>
     <div class="newsletter">
       <p class="newsletter-text">Schrijf je in op onze nieuwsbrief</p>
       <div class="button-frame frame">
         <input placeholder="E-mailadres" type="email" />
         <primary-button value="Submit"></primary-button>
       </div>
       <p class="newsletter-subtext">
         Zo ontvang je de lekkerste recepten <br>
         eens per week in je e-mailadres
       </p>
     </div>
     <div class="company-info">
       <router-link to="/company" class="text-wrapper-3">Het bedrijf</router-link>
       <router-link to="/about" class="text-wrapper-4">Over ons</router-link>
       <router-link to="/contact" class="text-wrapper-5">Neem contact op</router-link>
       <router-link to="/partners" class="text-wrapper-6">Partners</router-link>
     </div>
     <div class="socials">
       <a href="https://www.instagram.com/" target="_blank" class="group-2">
         <div class="text-wrapper-11">Instagram</div>
         <img class="instagram" alt="Instagram" src="../assets/instagram.png"/>
       </a>
       <a href="https://www.instagram.com/" class="group-3">
         <div class="text-wrapper-11">YouTube</div>
         <img class="youtube" alt="YouTube" src="../assets/youtube.png"/>
       </a>
       <a href="https://www.instagram.com/" class="group-4">
         <div class="text-wrapper-11">Twitter</div>
         <img class="twitter" alt="Twitter" src="../assets/twitter.png"/>
       </a>
       <a href="https://www.instagram.com/" class="group-5">
         <div class="text-wrapper-11">Facebook</div>
         <img class="facebook" alt="Facebook" src="../assets/facebook.png"/>
       </a>
       <div class="company-name-footer">
         <div>Het</div><div>Kliekjes Kookboek</div>
       </div>
     </div>
     <img class="footer-mascot" src="../assets/mascotte-general.png" alt="Footer achtergrond">
   </div>
 </footer>
</template>

<style lang="css">

#footer {
  position: relative;
  bottom: 0;
}

.inner-footer {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}

.background {
  height: 436px;
  position: relative;
  width: 100%;
  top: 34px;
}

.group {
  left: 0;
  position: absolute;
  bottom: 0;
  color: #636363;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0;
  white-space: nowrap;
  margin-left: 185px;
}

.text-wrapper {
  color: #636363;
  font-size: 12px;
  font-weight: 500;
  height: 14px;
  left: 0;
  letter-spacing: normal;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.privacy-policy {
  color: #636363;
  font-size: 12px;
  font-weight: 500;
  height: 14px;
  left: 871px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.text-wrapper-2 {
  color: #636363;
  font-size: 12px;
  font-weight: 500;
  height: 14px;
  left: 966px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.newsletter {
  left: 561px;
  position: absolute;
  top: 179px;
  width: 439px;
}

.newsletter-text {
  color: #e9e9e9;
  font-size: 18px;
  font-weight: 400;
  height: 20px;
  left: 0;
  letter-spacing: -.36px;
  line-height: 20px;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.button-frame {
  top: 92px;
  width: 435px;
  position: relative;
}

.button-frame input {
  background: #ffffffcc;
  width: 100%;
  height: 45px;
  border-radius: 45px;
}

.button-frame input::placeholder {
  color: #444444;
  font-weight: 600;
}

.button-frame button {
  position: absolute;
  right: 0;
}

.newsletter-subtext {
  color: #b3b3b3;
  font-size: 16px;
  font-weight: 500;
  height: 38px;
  left: 0;
  letter-spacing: -.32px;
  line-height: normal;
  position: absolute;
  top: 37px;
}

.company-info {
  height: 122px;
  left: 368px;
  position: absolute;
  top: 179px;
  width: 140px;
}

.text-wrapper-3 {
  color: #e9e9e9;
  font-size: 16px;
  font-weight: 400;
  height: 20px;
  left: 0;
  letter-spacing: -.32px;
  line-height: 20px;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.text-wrapper-4 {
  color: #b3b3b3;
  font-size: 16px;
  font-weight: 500;
  left: 0;
  letter-spacing: -.32px;
  position: absolute;
  height: 23px;
  line-height: normal;
  top: 69px;
  width: 75px;
}

.text-wrapper-5 {
  color: #b3b3b3;
  font-size: 16px;
  font-weight: 500;
  height: 19px;
  left: 0;
  letter-spacing: -.32px;
  line-height: normal;
  position: absolute;
  top: 103px;
  white-space: nowrap;
}

.text-wrapper-6 {
  color: #b3b3b3;
  font-size: 16px;
  font-weight: 500;
  left: 0;
  height: 19px;
  letter-spacing: -.32px;
  line-height: normal;
  position: absolute;
  top: 39px;
  white-space: nowrap;
}

.socials {
  height: 169px;
  left: 188px;
  position: absolute;
  top: 158px;
  width: 157px;
}

.group-2 {
  height: 19px;
  position: absolute;
  top: 120px;
  width: 104px;
}

.instagram {
  height: 16px;
  position: absolute;
  width: 17px;
}

.group-3 {
  height: 19px;
  position: absolute;
  top: 150px;
  width: 92px;
}

.youtube {
  height: 16px;
  position: absolute;
  width: 17px;
}

.group-4 {
  height: 19px;
  position: absolute;
  top: 91px;
  width: 82px;
}

.text-wrapper-11 {
  color: #b3b3b3;
  font-size: 16px;
  font-weight: 500;
  height: 19px;
  left: 25px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.twitter {
  height: 16px;
  position: absolute;
  width: 17px;
}

.group-5 {
  position: absolute;
  top: 62px;
  width: 100px;
}

.facebook {
  height: 16px;
  position: absolute;
  width: 17px;
}

.company-name-footer {
  color: #e9e9e9;
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  width: 200px;
}

.footer-mascot {
  left: 1004px;
  position: absolute;
  top: 0;
}
</style>