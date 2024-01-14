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
 <div class="footer">
   <div class="overlap">
     <img class="background" src="../assets/background-foooter.png" alt="footer background">
     <div class="group">
       <p class="text-wrapper"> 2023 Kliekjes Kookboek Co., Ltd. All rights reserved</p>
       <div class="div">Privacy Policy</div>
       <div class="text-wrapper-2">Terms of Service</div>
     </div>
     <div class="abonneer">
       <p class="p">Schrijf je in op onze nieuwsbrief</p>
       <div class="frame">
         <div class="text-wrapper-3">E-mailadres</div>
         <div class="recept-knop">
           <div class="overlap-group">
             <div class="text-wrapper-4">SUBMMIT</div>
           </div>
         </div>
       </div>
       <p class="zo-ontvang-je-de">
         Zo ontvang je de lekkerste recepten <br>
         eens per week in je e-mailadres
       </p>
     </div>
     <div class="company-info">
       <div class="text-wrapper-5">Het bedrijf</div>
       <div class="text-wrapper-6">Over ons</div>
       <div class="text-wrapper-7">Neem contact op</div>
       <div class="text-wrapper-8">Partners</div>
     </div>
     <div class="socials">
       <div class="group-2">
         <div class="text-wrapper-9">Instagram</div>
<!--         <img class="instagram" alt="Instagram" src="../assets/instagram.png"/>-->
       </div>
       <div class="group-3">
         <div class="text-wrapper-10">YouTube</div>
<!--         <img class="youtube" alt="YouTube" src="../assets/youtube.png"/>-->
       </div>
       <div class="group-4">
         <div class="text-wrapper-11">Twitter</div>
<!--         <img class="twitter" alt="Twitter" src="../assets/twitter.png"/>-->
       </div>
       <div class="group-5">
         <div class="text-wrapper-9">Facebook</div>
<!--         <img class="square-facebook" alt="Facebook" src="../assets/facebook.png"/>-->
       </div>
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
 </div>
</template>

<style lang="css">

.footer {
  box-shadow: inset 0 4px 4px #00000040;
  height: 250px;
  width: 100%;
}

.footer .overlap {
  height: 470px;
  left: 1px;
  position: relative;
  top: -108px;
}

.footer .background {
  height: 436px;
  left: 0;
  position: absolute;
  top: 34px;
  width: 100%;
}

.footer .group {
  height: 14px;
  left: 188px;
  position: absolute;
  top: 421px;
  width: 1071px;
}

.footer .text-wrapper {
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

.footer .div {
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

.footer .text-wrapper-2 {
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

.footer .abonneer {
  left: 561px;
  position: absolute;
  top: 179px;
  width: 439px;
}

.footer .p {
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

.footer .frame {
  background: #ffffffcc;
  border-radius: 45px;
  box-shadow: 0 4px 4px #00000060;
  height: 45px;
  left: 0;
  position: absolute;
  top: 92px;
  width: 435px;
}

.footer .text-wrapper-3 {
  color: #444444;
  font-size: 14px;
  font-weight: 600;
  left: 15px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 14px;
  white-space: nowrap;
}

.footer .recept-knop {
  height: 40px;
  left: 282px;
  overflow: hidden;
  position: absolute;
  top: 3px;
  width: 150px;
}

.footer .overlap-group {
  background: #E4A428;
  border-radius: 45px;
  height: 40px;
  position: relative;
}

.footer .text-wrapper-4 {
  color: white;
  font-size: 16px;
  font-weight: 600;
  height: 19px;
  left: 40px;
  letter-spacing: 2px;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 10px;
  white-space: nowrap;
}

.footer .zo-ontvang-je-de {
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

.footer .company-info {
  height: 122px;
  left: 368px;
  position: absolute;
  top: 179px;
  width: 140px;
}

.footer .text-wrapper-5 {
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

.footer .text-wrapper-6 {
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

.footer .text-wrapper-7 {
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

.footer .text-wrapper-8 {
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

.footer .socials {
  height: 169px;
  left: 188px;
  position: absolute;
  top: 158px;
  width: 157px;
}

.footer .group-2 {
  height: 19px;
  left: 0;
  position: absolute;
  top: 120px;
  width: 104px;
}

.footer .text-wrapper-9 {
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

.footer .instagram {
  height: 16px;
  left: 0;
  position: absolute;
  top: 3px;
  width: 13px;
}

.footer .group-3 {
  height: 19px;
  left: 0;
  position: absolute;
  top: 150px;
  width: 92px;
}

.footer .text-wrapper-10 {
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

.footer .youtube {
  height: 16px;
  left: 0;
  position: absolute;
  top: 3px;
  width: 17px;
}

.footer .group-4 {
  height: 19px;
  left: 0;
  position: absolute;
  top: 91px;
  width: 82px;
}

.footer .text-wrapper-11 {
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

.footer .twitter {
  height: 16px;
  left: 0;
  position: absolute;
  top: 2px;
  width: 15px;
}

.footer .group-5 {
  height: 19px;
  left: 0;
  position: absolute;
  top: 62px;
  width: 100px;
}

.footer .facebook {
  height: 16px;
  left: 0;
  position: absolute;
  top: 2px;
  width: 13px;
}

.footer .het-kliekjes {
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

.footer .span {
  color: #e9e9e9;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 20px;
}

.footer .text-wrapper-12 {
  font-size: 20px;
  font-weight: 500;
}

.footer .text-wrapper-13 {
  font-size: 18px;
  font-weight: 500;
}

.footer .ralf-van-der-koek {
  height: 357px;
  left: 1004px;
  position: absolute;
  top: 0;
  width: 337px;
}
</style>