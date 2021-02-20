<template>
  <div class="InDevelopment">
    <NavBar />
    <br />
    <h1 class="text-center">
      {{ $t("dev.inDevelopment") }}
    </h1>
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer,
  },
  metaInfo() {
    return {
      title: this.$i18n.t("views.inDevelopment"),
    };
  },
};
</script>

<style scoped>
h1 {
  margin-top: 100px;
  font-family: Consolas;
}
</style>
