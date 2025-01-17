import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";
import { createPinia } from "pinia";
import "./assets/styles/tailwind.css";
import { useAuthStore } from "./store/authStore";
const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
const authStore = useAuthStore();
authStore.checkAuth().then(() => {
  app.mount("#app");
});
