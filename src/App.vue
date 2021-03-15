<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Alexander Schilling",
    titleTemplate: "%s | AS",
    meta: [
      { name: "og:type", content: "website" },
      { name: "og:url", content: "https://alexanderschilling.cl" },
      { name: "og:title", content: "Alexander Schilling" },
      { name: "og:description", content: "Personal website" },
      { name: "og:image", content: "https://alexanderschilling.cl/img/bg.png" },
    ],
  },
  mounted() {
    this.$store.dispatch("setLocale", {
      locale: this.$store.state.locale,
      i18n: this.$i18n,
    });
  },
};
</script>

<style lang="scss">
@import "./assets/custom-vars.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

@font-face {
  font-family: "Consolas";
  src: url("./assets/fonts/consola.ttf") format("truetype");
}

#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
h4 {
  font-family: Consolas;
}
</style>
