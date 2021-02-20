<template>
  <div class="Error404">
    <NavBar />

    <b-container>
      <div id="random-img" class="text-center" v-if="randomImage">
        <b-img :src="randomImage" alt="404" fluid></b-img>
      </div>
    </b-container>

    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Error404",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      images: [
        require("@/assets/img/404/gta3.webp"),
        require("@/assets/img/404/gtasa.jpg"),
      ],
      randomImage: null,
    };
  },
  methods: {
    selectRandomImage() {
      return this.images[Math.floor(Math.random() * this.images.length)];
    },
  },
  created() {
    this.randomImage = this.selectRandomImage();
  },
  metaInfo() {
    return {
      title: this.$i18n.t("views.error404"),
    };
  },
};
</script>

<style scoped>
#random-img {
  margin-top: 25px;
}
</style>
