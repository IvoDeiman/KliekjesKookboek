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
    <div class="nav-container">
      <nav class="navbar">
        <img class="logo" src="@/assets/kliekjes-logo.png" alt=""/>
        <ul class="nav-links">
          <input type="checkbox" id="checkbox_toggle"/>
          <label for="checkbox_toggle" class="hamburger">&#9776;</label>
          <div class="menu">
            <li>
              <router-link to="/">
                Home
              </router-link>
            </li>
            <li>
              <router-link to="/recipes">
                Recepten
              </router-link>
            </li>
            <li>
              <router-link to="/about">
                Over ons
              </router-link>
            </li>
            <li>
              <router-link to="/login">
                <font-awesome-icon :icon="['far', 'user']" />
              </router-link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}

.nav-container {
  backdrop-filter: blur(5px);
  background: #E4A428 linear-gradient(240deg, rgba(255, 206, 112, 0.30) 30.28%, rgba(0, 0, 0, 0.00) 88.36%) fixed;
  position: fixed;
  z-index: 5;
  width: 100%;
}

.navbar {
  max-width: 1084px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding: 20px;
  height: 75px;
  color: #fff;
}

.nav-links a {
  color: #fff;
}

/* LOGO */
.logo {
  font-size: 32px;
}

/* NAVBAR MENU */
.menu {
  display: flex;
  gap: 1em;
  font-size: 18px;
}

.menu li:hover a {
  color: black;
  border-radius: 5px;
  transition: 0.1s ease;
}

.menu li {
  padding: 5px 14px;
}

.menu li {
  font-family: Work Sans, sans-serif;
  font-weight: 400;
  font-size: 16px;
}

/* DROPDOWN MENU */
.services {
  position: relative;
}

.dropdown {
  background: linear-gradient(240deg, rgba(255, 206, 112, 0.30) 30.28%, rgba(0, 0, 0, 0.00) 88.36%), #E4A428;
  padding: 1em 0;
  position: absolute; /*WITH RESPECT TO PARENT*/
  display: none;
  border-radius: 8px;
  top: 40px;
}

.dropdown li + li {
  margin-top: 10px;
}

.dropdown li {
  padding: 0.5em 1em;
  width: 8em;
  text-align: center;
}

.dropdown li:hover {
  color: black;
}

.services:hover .dropdown {
  display: block;
}

input[type=checkbox] {
  display: none;
}

/* HAMBURGER MENU */
.hamburger {
  display: none;
  font-size: 24px;
  user-select: none;
  transition: 0.1s ease;
}

.hamburger:hover{
  color: black;
}

/* APPLYING MEDIA QUERIES */
@media (max-width: 1080px) {
  .nav-container {
    width: 100%;
  }

  .menu {
    display:none;
    position: absolute;
    background: linear-gradient(240deg, rgba(255, 206, 112, 0.70), rgba(0, 0, 0, 0.00)), #E4A428;
    z-index: 1;
    right: 0;
    left: 70%;
    max-width: 350px;
    text-align: center;
    padding: 10px 0;
    top: 75px;
  }

  .menu li:hover {
    display: inline-block;
    transition: 0.3s ease;
    color: black;
  }

  .menu li + li {
    margin-top: 0;
  }

  input[type=checkbox]:checked ~ .hamburger {
    color: black;
  }

  input[type=checkbox]:checked ~ .menu {
    display: block;
  }

  .hamburger {
    display: block;
  }

  .dropdown li:hover {
    background: linear-gradient(240deg, rgba(255, 206, 112, 0.70), rgba(0, 0, 0, 0.00)), #E4A428;
  }
}
</style>