<template>
  <div class="filter-box" :class="{ 'expanded': expanded }"  @click="toggleFilterBox()">
    <div class="filter-title">{{title}}</div>
    <div class="filter-subtext">{{currentlySelected}}/{{selectionEntries}} geselecteerd</div>
    <div v-show="expanded" class="checkbox-section">
      <div class="checkbox-item" v-for="(checkbox, index) in content" :key="index">
        <label class="checkbox-container">
          <input type="checkbox" v-model="checkbox.checked" class="checkbox-input" @click.stop />
          <span class="checkbox-label">{{ checkbox.label }}</span>
        </label>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "filter-box-component",
  components: {},
  props:['filterData'],
  data() {
    return {
      expanded: false,
      title: false,
      currentlySelected: 0,
      selectionEntries: 0,
      content: [{label: '', checkbox: false}]
    }
  },
  methods: {
    toggleFilterBox() {
      this[`expanded`] = !this[`expanded`];
    },
  },
  created(){
    this.title = this.filterData.title;
    this.content = this.filterData.content;
    this.selectionEntries = this.filterData.content.length;
  }
}
</script>

<style scoped>
.filter-box {
  margin-bottom: 20px;
  margin-top: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px;
  left: 10px;
  overflow: hidden;
  cursor: pointer;
}

.expanded {
}

.filter-title {
  font-weight: bold;
  font-size: 18px;
  text-transform: capitalize;
}

.filter-subtext {
  font-size: 14px;
}

.checkbox-section {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.checkbox-item {
  margin-bottom: 5px;
  margin-right: 10px;
  padding: 5px;
  align-items: center;
  background: #F0F0F0;
  white-space: nowrap;
  max-width: fit-content;
  color: black;
  border-radius: 6px;
  font-family: Work Sans, sans-serif;
  text-transform: capitalize;
}

.checkbox-container {
  pointer-events: all;
}

.checkbox-input {
  margin-right: 5px;
}
</style>