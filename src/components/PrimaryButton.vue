<template>
  <button class="button-primary">{{value}}</button>
</template>

<script>
export default {
  name: "primary-button",
  props: ['value'],
  data(){
    return{
      label: String
    }
  }
}
</script>

<style scoped>
.button-primary{
  background: linear-gradient(240deg, rgba(255, 206, 112, 0.70), rgba(0, 0, 0, 0.00)), #E4A428;
  color: #ffffff;
  font-family: Work Sans, sans-serif;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: .2rem;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  width: 200px;
  height: 45px;
  border-radius: 45px;
  transition: transform, color, .1s;
}

.button-primary:hover {
  transform: scale(1.05);
}
</style>