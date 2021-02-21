import Vue from "vue";

import "./plugins/bootstrap-vue";
import i18n from "./plugins/i18n";
import "./plugins/font-awesome";
import "./plugins/vue-typed-js";

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  store,
  render: (h) => h(App),
}).$mount("#app");
