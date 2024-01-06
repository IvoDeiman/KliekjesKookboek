<script>
export default {
  name: "HomePage",
  props: {
    msg: String
  }
}
</script>
<template>
  <header id="navbar" class="shadow h-16 flex justify-between items-stretch">
    <div class="inline-flex items-center ms-36 text-black font-bold">
      <img src="../assets/kliekjes-logo.png" alt="ewa" height="63">
    </div>
    <div class="flex items-center gap-1">
      <router-link
          :to="{ name: 'Home' }"
          class="inline-flex items-center px-2 h-full font-semibold transition-colors text-white hover:text-black">
        Home
      </router-link>
      <router-link
          :to="{ name: 'Home' }"
          class="inline-flex items-center px-2 h-full font-semibold transition-colors text-white hover:text-black">
        Recepten
      </router-link>
      <router-link
          :to="{ name: 'Home' }"
          class="inline-flex items-center me-36 px-2 h-full font-semibold transition-colors text-white hover:text-black">
        Over ons
      </router-link>
      <router-link
          :to="{ name: 'Home' }"
          class="inline-flex items-center me-36 px-2 h-full font-semibold transition-colors text-white hover:text-black">
        Over ons
      </router-link>
    </div>
  </header>
</template>

<style>
#navbar {
  background: linear-gradient(240deg, rgba(255, 206, 112, 0.30) 30.28%, rgba(0, 0, 0, 0.00) 88.36%), #E4A428;
}
</style>