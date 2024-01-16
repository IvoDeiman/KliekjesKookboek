<script>
import router from "@/routers";


export default {
  name: "HomePage",
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
  <header id="navbar" class="flex justify-between items-stretch width-container">
    <router-link
        to="/"
        class="inline-flex items-center ms-36">
      <img src="../../assets/kliekjes-logo.png" alt="ewa" height="63">
    </router-link>
    <div class="flex items-center gap-1">
      <router-link
          to="/"
          class="inline-flex items-center px-3 h-full font-semibold text-white hover:text-black">
        Home
      </router-link>
      <router-link to="/recipes"
          class="inline-flex items-center px-3 h-full font-semibold text-white hover:text-black">
        Recepten
      </router-link>
      <router-link
          to="/about"
          class="inline-flex items-center px-3 h-full font-semibold text-white hover:text-black">
        Over ons
      </router-link>
      <router-link
          to="/my_account"
          class="inline-flex items-center me-36 px-3 h-full font-semibold text-white hover:text-black">
        <font-awesome-icon :icon="['far', 'user']" />
      </router-link>
    </div>
  </header>
</template>

<style lang="css">
#navbar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 2;
  background: linear-gradient(240deg, rgba(255, 206, 112, 0.30) 30.28%, rgba(0, 0, 0, 0.00) 88.36%), #E4A428;
  backdrop-filter: blur(5px);
}

#navbar .exact-active {
  color: black;
}
</style>
