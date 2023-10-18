import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "./App";
import "ant-design-vue/dist/reset.css";
import "./assets/global.css"
import "./assets/tailwind.css";
import router from "./router/index";

const app = createApp(App);

app.use(Antd).use(router).mount("#app");
