<script>
import router from "@/routers";


export default {
  name: "FooterGeneral",
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
 <footer id="footer" class="flex justify-between items-stretch">
   <div class="overlap">
     <img class="background" src="../assets/background-foooter.png" alt="footer background">
     <div class="group">
       <p class="text-wrapper"> 2023 Kliekjes Kookboek Co., Ltd. All rights reserved</p>
       <div class="div">Privacy Policy</div>
       <div class="text-wrapper-2">Terms of Service</div>
     </div>
     <div class="newsletter">
       <p class="newsletter-text">Schrijf je in op onze nieuwsbrief</p>
       <div class="button-frame frame">
         <input placeholder="E-mailadres" type="email" />
         <button class="button-primary">Submit</button>
       </div>
       <p class="newsletter-subtext">
         Zo ontvang je de lekkerste recepten <br>
         eens per week in je e-mailadres
       </p>
     </div>
     <div class="company-info">
       <router-link to="/company" class="text-wrapper-5">Het bedrijf</router-link>
       <router-link to="/about" class="text-wrapper-6">Over ons</router-link>
       <router-link to="/contact" class="text-wrapper-7">Neem contact op</router-link>
       <router-link to="/partners" class="text-wrapper-8">Partners</router-link>
     </div>
     <div class="socials">
       <a href="https://www.instagram.com/" target="_blank" class="group-2">
         <div class="text-wrapper-9">Instagram</div>
         <img class="instagram" alt="Instagram" src="../assets/instagram.png"/>
       </a>
       <a href="https://www.instagram.com/" class="group-3">
         <div class="text-wrapper-10">YouTube</div>
         <img class="youtube" alt="YouTube" src="../assets/youtube.png"/>
       </a>
       <a href="https://www.instagram.com/" class="group-4">
         <div class="text-wrapper-11">Twitter</div>
         <img class="twitter" alt="Twitter" src="../assets/twitter.png"/>
       </a>
       <a href="https://www.instagram.com/" class="group-5">
         <div class="text-wrapper-9">Facebook</div>
         <img class="facebook" alt="Facebook" src="../assets/facebook.png"/>
       </a>
       <p class="het-kliekjes">
         <span class="span">Het</span>
         <span class="text-wrapper-12">
           <br>
         </span>
         <span class="text-wrapper-13">Kliekjes Kookboek</span>
       </p>
     </div>
     <img class="ralf-van-der-koek" src="../assets/mascotte-general.png" alt="Footer achtergrond">
   </div>
 </footer>
</template>

<style lang="css">

#footer {
  position: relative;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}

.overlap {
  width: 100%;
}

.background {
  height: 436px;
  left: 0;
  position: relative;
  top: 34px;
  width: 100%;
}

.group {
  height: 14px;
  position: relative;
  width: auto;
  margin-left: 210px;
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

.div {
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

.text-wrapper-5 {
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

.text-wrapper-6 {
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

.text-wrapper-7 {
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

.text-wrapper-8 {
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
  left: 0;
  position: absolute;
  top: 120px;
  width: 104px;
}

.text-wrapper-9 {
  color: #b3b3b3;
  font-size: 16px;
  font-weight: 500;
  height: 19px;
  left: 23px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.instagram {
  height: 16px;
  left: 0;
  position: absolute;
  top: 3px;
  width: 13px;
}

.group-3 {
  height: 19px;
  left: 0;
  position: absolute;
  top: 150px;
  width: 92px;
}

.text-wrapper-10 {
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

.youtube {
  height: 16px;
  left: 0;
  position: absolute;
  top: 3px;
  width: 17px;
}

.group-4 {
  height: 19px;
  left: 0;
  position: absolute;
  top: 91px;
  width: 82px;
}

.text-wrapper-11 {
  color: #b3b3b3;
  font-size: 16px;
  font-weight: 500;
  height: 19px;
  left: 24px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.twitter {
  height: 16px;
  left: 0;
  position: absolute;
  top: 2px;
  width: 15px;
}

.group-5 {
  height: 19px;
  left: 0;
  position: absolute;
  top: 62px;
  width: 100px;
}

.facebook {
  height: 16px;
  left: 0;
  position: absolute;
  top: 2px;
  width: 13px;
}

.het-kliekjes {
  color: #e9e9e9;
  font-size: 14px;
  font-weight: 400;
  height: 41px;
  letter-spacing: 0;
  left: 0;
  line-height: 20px;
  position: absolute;
  top: 0;
}

.span {
  color: #e9e9e9;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 20px;
}

.text-wrapper-12 {
  font-size: 20px;
  font-weight: 500;
}

.text-wrapper-13 {
  font-size: 18px;
  font-weight: 500;
}

.ralf-van-der-koek {
  height: 357px;
  left: 1004px;
  position: absolute;
  top: 0;
  width: 337px;
}
</style>