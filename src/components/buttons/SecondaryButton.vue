<template>
  <button class="button-secondary">{{value}}</button>
</template>

<script>
export default {
  name: "secondary-button",
  props: ['value'],
  data(){
    return{
      label: String
    }
  }
}
</script>

<style scoped>
.button-secondary {
  display: flex;
  font-family: Work Sans, sans-serif;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: .2rem;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: #ffffff;
  width: 200px;
  height: 45px;
  border: solid 2px white;
  border-radius: 45px;
  transition: transform, color, .1s;
}

.button-secondary:hover {
  color: #E4A428;
  border: solid 2px #E4A428;
  transform: scale(1.05);
}
</style>