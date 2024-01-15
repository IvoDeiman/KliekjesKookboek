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
 <footer id="footer" class="flex justify-between">
   <div class="inline-flex items-center ms-36">
     <div class="flex">
       <div class="socials">
         <div class="company-name-footer">
           Het <br> Kliekjes Kookboek
         </div>
         <a target="_blank" href="https://www.facebook.com/" class="link-group">
           <img class="socials-logo" alt="Facebook Logo" src="../assets/facebook.png"/> Facebook
         </a>
         <a target="_blank" href="https://twitter.com/home" class="link-group">
           <img class="socials-logo" alt="Twitter Logo" src="../assets/twitter.png"/> Twitter
         </a>
         <a target="_blank" href="https://www.instagram.com/" class="link-group">
           <img class="socials-logo" alt="Instagram Logo" src="../assets/instagram.png"/> Instagram
         </a>
         <a target="_blank" href="https://www.youtube.com/" class="link-group">
           <img class="socials-logo" alt="YouTube Logo" src="../assets/youtube.png"/> YouTube
         </a>
         <div class="company-rights">
           © 2023 Kliekjes Kookboek Co., Ltd. All rights reserved
         </div>
       </div>
       <div class="company-info">
         <div class="our-company">
           Het bedrijf
         </div>
         <router-link to="/partners" class="link-group">
           Partners
         </router-link>
         <router-link to="/about" class="link-group">
           Over ons
         </router-link>
         <router-link to="/contact" class="link-group">
           Neem contact op
         </router-link>
       </div>
     </div>
     <div class="newsletter">
       <div class="newsletter-header">
         Schrijf je in op onze nieuwsbrief
       </div>
       <div class="newsletter-subtext my-[17px]">
         Zo ontvang je de lekkerste recepten <br> eens per week in je e-mail!
       </div>
       <div class="button-frame">
         <input placeholder="E-mailadres" type="email" />
         <primary-button value="Submit"></primary-button>
       </div>
     </div>
   </div>
   <div class="inline-flex items-center">
     <img class="me-36 mb-36" src="../assets/mascot-general.png" alt="Footer mascot">
     <div class="privacy-and-tos">
       <a class="me-[15px]" target="_blank">
         Privacy Policy
       </a>
       <a target="_blank">
        Terms of Service
       </a>
     </div>
   </div>
 </footer>
</template>

<style lang="css">
#footer {
  width: 100%;
  background: #1E1E1E;
  clip-path: polygon(0 20%, 100% 0%, 100% 100%, 0% 100%);
}

.socials {
  color: #B4B4B4;
  font-family: Work Sans, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 25px;
}

.company-rights {
  margin-top: 100px;
  color: #646464;
  display: inline-flex;
  position: absolute;
  font-family: Work Sans, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.privacy-and-tos {
  margin-left: 80px;
  margin-top: 420px;
  color: #646464;
  display: inline-flex;
  position: absolute;
  font-family: Work Sans, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.company-info {
  color: #B4B4B4;
  font-family: Work Sans, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 122px;
  margin-top: 20px;
}

.newsletter {
  font-family: Work Sans, sans-serif;
  font-style: normal;
  margin-bottom: 30px;
}

.button-frame {
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

.newsletter-header {
  color: #EAEAEA;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px; /* 111.111% */
  letter-spacing: -0.36px;
}

.our-company {
  margin-bottom: 21px;
  color: #EAEAEA;
  font-size: 16px;
  font-family: Work Sans, sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -.32px;
}

.newsletter-subtext {
  color: #B4B4B4;
  font-family: Work Sans, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
}

.socials-logo {
  margin-right: 8px;
}

.link-group {
  display: flex;
  align-items: center;
  margin-bottom: 18px;
}

.button-frame input {
  background: #ffffffcc;
  width: 100%;
  height: 45px;
  border-radius: 45px;
}

.company-name-footer {
  margin-bottom: 21px;
  color: #EAEAEA;
  font-size: 18px;
  font-family: Bitter, sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
}

.button-frame input::placeholder {
  color: #444444;
  font-weight: 600;
}

.button-frame button {
  position: absolute;
  right: 0;
}
</style>