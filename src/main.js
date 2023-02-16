import { createApp } from "vue";
import "normalize.css";
import "./assets/css/index.scss";
import animated from "animate.css";

import App from "./App.vue";
import router from "./router";

createApp(App).use(router).use(animated).mount("#app");
