<template>
  <input id="search-bar" :placeholder="placeholder" type="text" :name="name" :value="value" @input="$emit('input', $event.target.value)" />
</template>

<script>
export default {
  name: 'SearchComponent',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
  },
  computed: {
    name() {
      return this.label.toLowerCase();
    },
  },
}
</script>

<style>
#search-bar {
  border-radius: 10px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  border: none;
  height: 65px;
  width: 480px;
}

#search-bar::placeholder {
  color: #444444;
  font-weight: bolder;
}
</style>