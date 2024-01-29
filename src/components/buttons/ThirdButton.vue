<template>
  <button class="button-tertiary">{{value}}</button>
</template>

<script>
export default {
  name: "tertiary-button",
  props: ['value'],
  data(){
    return{
      label: String
    }
  }
}
</script>

<style scoped>
.button-tertiary {
  display: flex;
  font-family: Work Sans, sans-serif;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: .2rem;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: #ffffff;
  height: 45px;
  border: solid 2px white;
  border-radius: 45px;
  transition: transform, color, .1s;
}

.button-tertiary:hover {
  color: #E4A428;
  border: solid 2px #E4A428;
  transform: scale(1.05);
}
</style>