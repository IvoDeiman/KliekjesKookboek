<template>
  <div class="filter-box" :class="{ 'expanded': expanded }"  @click="toggleFilterBox()">
    <div class="flex">
      <div class="filter-title">{{title}}</div>
      <font-awesome-icon class="mt-1 ms-auto" :icon="['fas', expanded ? 'chevron-up' : 'chevron-down']" />
    </div>
    <div class="filter-subtext">{{currentlySelected}}/{{selectionEntries}} geselecteerd</div>
    <div v-show="expanded" class="checkbox-section">
      <div class="checkbox-item" v-for="(checkbox, index) in content" :key="index">
        <label class="checkbox-container">
          <input type="checkbox" :checked="activeFilters.includes(checkbox.label)" v-model="checkbox.checkbox" @change="handleCheckboxChange" class="checkbox-input" @click.stop />
          {{ checkbox.label }}
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
      content: [{label: '', checkbox: false}],
      activeFilters: [],
      removeFilter: '',
    }
  },
  methods: {
    toggleFilterBox() {
      this[`expanded`] = !this[`expanded`];
    },
    handleCheckboxChange() {
      let count=0;
      let activated = []
      this.removeFilter = ''
      for (let i=0; i < this.content.length; i++){
        let label = this.content[i].label
        let checkbox = this.content[i].checkbox
        if(checkbox){
          activated.push(label);
          count++;
        } else if(!checkbox && this.activeFilters.includes(label)){
          this.removeFilter = label;
          this.emitFilterToRemove();
          activated.filter((e) => e !== label);
        }
      }
      this.activeFilters = activated;
      this.currentlySelected = count;
      this.emitActiveFilters();
    },
    emitActiveFilters(){
      this.$emit('activeFilters',this.activeFilters);
    },
    emitFilterToRemove(){
      this.$emit('removeFilters', this.removeFilter);
    },
    sortFiltersAlfabetically(){
      this.content.sort(function (a,b) {
        if(a.label < b.label){
          return -1;
        } else if(a.label > b.label){
          return 1
        } else {
          return 0;
        }
      })
    },
  },
  created(){
    this.title = this.filterData.title;
    this.content = this.filterData.content;
    this.sortFiltersAlfabetically()
    this.selectionEntries = this.filterData.content.length;
  },
  mounted(){
  this.emitActiveFilters();
  this.emitFilterToRemove();
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
  height: 2rem;
  width: auto;
  margin-right: 5px;
  align-items: center;
  white-space: nowrap;
  max-width: fit-content;
  color: black;
  border-radius: 6px;
  font-family: Work Sans, sans-serif;
  text-transform: capitalize;
}

.checkbox-container {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
  min-width: fit-content;
  min-height: fit-content;
}

.checkbox-container input{
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 2rem;
  width: 100%;
}

.checkbox-container {
  top: 0;
  left: 0;
  height: max-content;
  width: max-content;
  background-color: #f0f0f0;
  border-radius: 6px;
  padding-left: 5px;
  padding-right: 5px;
  pointer-events: all;
  transition: background-color 0.1s, color 0.1s, scale 0.1s;
  transform: scale(1.0);
}

.checkbox-container:hover{
  background-color: #ccc;
  transform: scale(1.05);
}

.checkbox-container:has(input:checked){
  background-color: #E4A428;
  color: white;
}

</style>
