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

#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3 {
  font-family: Consolas;
}
</style>
