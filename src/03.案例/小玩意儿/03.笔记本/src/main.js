import { createApp } from "vue";
import router from "./router.js";
import "./style.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";

createApp(App)
  .use(ElementPlus)
  .mount("#app");
