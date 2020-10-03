import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Navigation from "./components/theNavigation";
import siteHeader from "./components/theHeader";

Vue.config.productionTip = false;
Vue.component("router", router);
Vue.component("navigation", Navigation);
Vue.component("siteHeader", siteHeader);

new Vue({
  name: "VueRoot",
  router,
  render: h => h(App)
}).$mount("#app");
