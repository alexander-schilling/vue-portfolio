import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const LOCALE_KEY = "locale";

export default new Vuex.Store({
  state: {
    locale: (() => {
      let locale = localStorage.getItem(LOCALE_KEY);

      if (locale != null) {
        return locale;
      } else if (navigator.language.toLocaleLowerCase().startsWith("es")) {
        return "es";
      } else {
        return "en";
      }
    })(),
  },
  mutations: {
    onLocaleChanged: function (state, payload) {
      if (payload.i18n.locale !== payload.locale) {
        localStorage.setItem(LOCALE_KEY, payload.locale);
        payload.i18n.locale = payload.locale;
        state.locale = payload.locale;
      }
    },
  },
  actions: {
    setLocale: function ({ commit }, payload) {
      commit("onLocaleChanged", payload);
    },
  },
  modules: {},
});
