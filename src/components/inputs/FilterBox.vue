<template>
  <div class="filter-box" :class="{ 'expanded': expanded }" @click="toggleFilterBox()">
    <div class="filter-title">{{title}}</div>
    <div class="filter-subtext">{{currentlySelected}}/{{selectionEntries}} geselecteerd</div>
    <div v-show="expanded" class="checkbox-section">
      <div class="checkbox-item" v-for="(checkbox, index) in content" :key="index">
        <input type="checkbox" v-model="checkbox.checked" class="checkbox-input" @click.stop />
        <span class="checkbox-label">{{ checkbox.label }}</span>
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
.expanded {
  height: 160px;
}

.filter-title {
  font-weight: bold;
  font-size: 18px;
}

.filter-subtext {
  font-size: 14px;
}

.checkbox-section {
  margin-top: 10px;
}

.checkbox-item {
  margin-bottom: 5px;
  display: flex;
  align-items: center;
}

.checkbox-input {
  margin-right: 5px;
}
</style>