import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/styles/main.css";
//Vue.component('v-select', vSelect);
//import 'vue-select/dist/vue-select.css';

const app = createApp(App);
app.use(router);
app.mount("#app");
