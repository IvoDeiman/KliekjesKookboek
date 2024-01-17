<template>
  <label class="label">
    {{ label }}
    <input class="input-field" type="text" :name="name" :value="value" @input="$emit('input', $event.target.value)" />
  </label>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  computed: {
    name() {
      return this.label.toLowerCase();
    },
  },
}
</script>

<style scoped>
.input-field {
  border-radius: 8px;
  background-color: #D6D6D64D;
  border: none;
  height: 60px;
  width: 480px;
  margin-left: 28px;
}

.label {
  color: #444;
  font-family: Work Sans, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
</style>
