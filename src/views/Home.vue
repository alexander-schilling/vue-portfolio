<template>
  <span class="Home">
    <NavBar />

    <Jumbotron />
    <About />
    <hr />
    <Skills />
    <hr />
    <Work />
    <hr />
    <Portfolio />

    <Footer />
  </span>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Jumbotron from "@/components/Jumbotron.vue";
import About from "@/components/About.vue";
import Skills from "@/components/Skills.vue";
import Work from "@/components/Work.vue";
import Portfolio from "@/components/Portfolio.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Jumbotron,
    About,
    Skills,
    Work,
    Portfolio,
    Footer,
  },
  metaInfo() {
    return {
      title: this.$i18n.t("views.home"),
    };
  },
};
</script>

<style>
hr {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
