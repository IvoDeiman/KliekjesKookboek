<template>
  <div id="first-segment" class="h-[925px]">
    <div class="hero grid grid-flow-col auto-cols-max ms-[0%]">
      <div class="filter-column absolute top-1/3">
        
        <div class="filter-box" :class="{ 'expanded': aanbevolenExpanded }" @click="toggleFilterBox('aanbevolen')">
          <div class="filter-title">Aanbevolen ingrediënt</div>
          <div class="filter-subtext">0/120 geselecteerd</div>
          <div v-show="aanbevolenExpanded" class="checkbox-section">
            <div class="checkbox-item" v-for="(checkbox, index) in aanbevolen" :key="index">
              <input type="checkbox" v-model="checkbox.checked" class="checkbox-input" @click.stop />
              <span class="checkbox-label">{{ checkbox.label }}</span>
            </div>
          </div>
        </div>

        <div class="filter-box" :class="{ 'expanded': groentenExpanded }" @click="toggleFilterBox('groenten')">
          <div class="filter-title">Groenten</div>
          <div class="filter-subtext">0/120 geselecteerd</div>
          <div v-show="groentenExpanded" class="checkbox-section">
            <div class="checkbox-item" v-for="(checkbox, index) in groenten" :key="index">
              <input type="checkbox" v-model="checkbox.checked" class="checkbox-input" @click.stop />
              <span class="checkbox-label">{{ checkbox.label }}</span>
            </div>
          </div>
        </div>

        <div class="filter-box" :class="{ 'expanded': vleesExpanded }" @click="toggleFilterBox('vlees')">
          <div class="filter-title">vlees</div>
          <div class="filter-subtext">0/120 geselecteerd</div>
          <div v-show="vleesExpanded" class="checkbox-section">
            <div class="checkbox-item" v-for="(checkbox, index) in vlees" :key="index">
              <input type="checkbox" v-model="checkbox.checked" class="checkbox-input" @click.stop />
              <span class="checkbox-label">{{ checkbox.label }}</span>
            </div>
          </div>
        </div>

        <div class="filter-box" :class="{ 'expanded': zuivelExpanded }" @click="toggleFilterBox('zuivel')">
          <div class="filter-title">Zuivel</div>
          <div class="filter-subtext">0/120 geselecteerd</div>
          <div v-show="zuivelExpanded" class="checkbox-section">
            <div class="checkbox-item" v-for="(checkbox, index) in zuivel" :key="index">
              <input type="checkbox" v-model="checkbox.checked" class="checkbox-input" @click.stop />
              <span class="checkbox-label">{{ checkbox.label }}</span>
            </div>
          </div>
        </div>

        <div class="filter-box" :class="{ 'expanded': visExpanded }" @click="toggleFilterBox('vis')">
          <div class="filter-title">Vis en zeevruchten</div>
          <div class="filter-subtext">0/120 geselecteerd</div>
          <div v-show="visExpanded" class="checkbox-section">
            <div class="checkbox-item" v-for="(checkbox, index) in vis" :key="index">
              <input type="checkbox" v-model="checkbox.checked" class="checkbox-input" @click.stop />
              <span class="checkbox-label">{{ checkbox.label }}</span>
            </div>
          </div>
        </div>

        <div class="filter-box" :class="{ 'expanded': olieExpanded }" @click="toggleFilterBox('olie')">
          <div class="filter-title">Oliën, dressing en frituurvet</div>
          <div class="filter-subtext">0/120 geselecteerd</div>
          <div v-show="olieExpanded" class="checkbox-section">
            <div class="checkbox-item" v-for="(checkbox, index) in olie" :key="index">
              <input type="checkbox" v-model="checkbox.checked" class="checkbox-input" @click.stop />
              <span class="checkbox-label">{{ checkbox.label }}</span>
            </div>
          </div>
        </div>

        <div class="filter-box" :class="{ 'expanded': kruidenExpanded }" @click="toggleFilterBox('kruiden')">
          <div class="filter-title">Kruiden</div>
          <div class="filter-subtext">0/120 geselecteerd</div>
          <div v-show="kruidenExpanded" class="checkbox-section">
            <div class="checkbox-item" v-for="(checkbox, index) in kruiden" :key="index">
              <input type="checkbox" v-model="checkbox.checked" class="checkbox-input" @click.stop />
              <span class="checkbox-label">{{ checkbox.label }}</span>
            </div>
          </div>
        </div>

        <div class="filter-box" :class="{ 'expanded': bakkenExpanded }" @click="toggleFilterBox('bakken')">
          <div class="filter-title">Bakken</div>
          <div class="filter-subtext">0/120 geselecteerd</div>
          <div v-show="bakkenExpanded" class="checkbox-section">
            <div class="checkbox-item" v-for="(checkbox, index) in bakken" :key="index">
              <input type="checkbox" v-model="checkbox.checked" class="checkbox-input" @click.stop />
              <span class="checkbox-label">{{ checkbox.label }}</span>
            </div>
          </div>
        </div>

      </div>
      <div class="text_section pt-48 me-10 flex items-center">
        <search-component id="search-bar" placeholder="Kliekjes toevoegen" value="" label=""></search-component>
        <button class="verras-me">Verras me</button>
      </div>
    </div>
  </div>
</template>
<script>
import SearchComponent from "@/components/inputs/Search.vue";

export default {
  name: "RecipeList",
  components: { SearchComponent },
  data() {
    return {
      aanbevolenExpanded: false,
      groentenExpanded: false,
      vleesExpanded: false,
      zuivelExpanded: false,
      visExpanded: false,
      olieExpanded: false,
      kruidenExpanded: false,
      bakkenExpanded: false,
      aanbevolen: [
        { label: "knoflook", checked: false },
        { label: "kaas", checked: false },
      ],
      groenten: [
        { label: "paprika", checked: false },
        { label: "ui", checked: false },
      ],
      vlees: [
        { label: "kip", checked: false },
        { label: "rund", checked: false },
      ],
      zuivel: [
        { label: "melk", checked: false },
        { label: "kaas", checked: false },
      ],
      vis: [
        { label: "zalm", checked: false },
        { label: "mossel", checked: false },
      ],
      olie: [
        { label: "olijfolie", checked: false },
        { label: "knoflook saus", checked: false },
      ],
      kruiden: [
        { label: "zout", checked: false },
        { label: "peper", checked: false },
      ],
      bakken: [
        { label: "meel", checked: false },
        { label: "eieren", checked: false },
      ],
    };
  },
  methods: {
    toggleFilterBox(filter) {
      this[`${filter}Expanded`] = !this[`${filter}Expanded`];
    },
  },
};
</script>

<style>
#search-screen {
  height: 100vh; 
}

.filter-column {
  width: 200px; 
  padding: 20px;
  top: 70px; 

}

.filter-box {
  margin-bottom: 20px;
  margin-top: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
  border-radius: 10px;
  padding: 10px;
  left: 10px; 
  transition: height 0.5s ease; 
  overflow: hidden; 
  cursor: pointer;
}

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

#first-segment {
  background: linear-gradient(240deg, rgba(255, 206, 112, 0.30) 30.28%, rgba(0, 0, 0, 0.00) 88.36%), #E4A428;
  height: 990px;
  top:0;
}

#search-bar{
  width: 540px;
}

.verras-me {
  height: 60px;
  width: 200px;
  margin-left: 10px;
  background-color: rgba(255, 255, 255, 0.3); /* Semi-transparent white background */
  color: white; /* Text color */
  border: 2px solid white; /* White border */
  border-radius: 10px; /* Rounded corners */
  padding: 10px 20px; /* Adjust padding as needed */
  font-size: 16px; /* Adjust font size as needed */
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
}

.verras-me:hover {
  background-color: rgba(255, 255, 255, 0.5); /* Lighter background on hover */
  border-color: rgba(255, 255, 255, 0.8); /* Lighter border on hover */
}
.company-name {
  color: #000;
  width: 402px;
  font-family: Bitter,sans-serif;
  font-size: 72px;
  font-style: normal;
  font-weight: bolder;
  line-height: 77px; /* 106.944% */
  letter-spacing: -1.44px;
}

.company-slogan {
  color: #FFF;
  max-width: inherit;
  font-family: Work Sans,sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px; /* 140% */
  letter-spacing: -1.25px;
}

.hero {
  justify-content: center;
  align-items: center;
}

.text_section{
  max-width: 540px;
}

#search-bar{
  width: 540px;
}

.luminous{
  mix-blend-mode: luminosity;
}

</style>