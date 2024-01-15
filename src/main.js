import { createApp } from "vue";
import router from "./routers";
import "./style.css";
import App from "./App.vue";

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import specific icons */
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUser)
library.add(faChevronDown)
library.add(faChevronUp)

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon).use(router).mount("#app");
