<template>
  <div class="Home">
    <NavBar />

    <Jumbotron />
    <About />

    <Skills />

    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Jumbotron from "@/components/Jumbotron.vue";
import About from "@/components/About.vue";
import Skills from "@/components/Skills.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Jumbotron,
    Skills,
    About,
    Footer,
  },
  metaInfo() {
    return {
      title: this.$i18n.t("views.home"),
    };
  },
};
</script>

<style scoped></style>
