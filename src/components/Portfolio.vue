<template>
  <b-container fluid class="px-5">
    <b-row class="mb-3">
      <b-col>
        <h1>
          <font-awesome-icon :icon="['fas', 'folder-open']" />
          {{ $t("portfolio.title") }}
        </h1>
      </b-col>
    </b-row>
    <b-row>
      <b-card-group columns>
        <template v-for="(card, index) in cards">
          <portfolio-card
            :key="'portfolio-card-' + index"
            :images="card.images"
            :embed="card.embed"
            :video="card.video"
            :videotype="card.videotype"
            :aspect="card.aspect"
            :nomodal="card.nomodal"
            :title="card.title"
            :description="card.description"
          ></portfolio-card>
        </template>
      </b-card-group>
    </b-row>
  </b-container>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "Portfolio",
  components: {
    "portfolio-card": Card,
  },
  computed: {
    cards() {
      return [
        {
          title: this.$i18n.t("portfolio.admin_menu.title"),
          description: this.$i18n.t("portfolio.admin_menu.description"),
          embed: "https://www.youtube.com/embed/mzqjA5V8IUU",
          nomodal: true,
        },
        {
          title: this.$i18n.t("portfolio.nutrial_mobile.title"),
          description: this.$i18n.t("portfolio.nutrial_mobile.description"),
          images: [
            /*
              Light Theme
            */
            {
              src: require("@/assets/img/portfolio/nutrial_mobile/light/patient_home.png"),
              caption: this.$i18n.t(
                "portfolio.nutrial_mobile.caption_patient_home"
              ),
              text: this.$i18n.t("portfolio.nutrial_mobile.text_patient_home"),
            },
            {
              src: require("@/assets/img/portfolio/nutrial_mobile/light/patient_meals.png"),
              caption: this.$i18n.t(
                "portfolio.nutrial_mobile.caption_patient_meals"
              ),
              text: this.$i18n.t("portfolio.nutrial_mobile.text_patient_meals"),
            },
            {
              src: require("@/assets/img/portfolio/nutrial_mobile/light/patient_charts.png"),
              caption: this.$i18n.t(
                "portfolio.nutrial_mobile.caption_patient_charts"
              ),
              text: this.$i18n.t(
                "portfolio.nutrial_mobile.text_patient_charts"
              ),
            },
            {
              src: require("@/assets/img/portfolio/nutrial_mobile/light/menu.png"),
              caption: this.$i18n.t("portfolio.nutrial_mobile.caption_menu"),
              text: this.$i18n.t("portfolio.nutrial_mobile.text_menu"),
            },
            {
              src: require("@/assets/img/portfolio/nutrial_mobile/light/change_password.png"),
              caption: this.$i18n.t(
                "portfolio.nutrial_mobile.caption_change_password"
              ),
              text: this.$i18n.t(
                "portfolio.nutrial_mobile.text_change_password"
              ),
            },
            {
              src: require("@/assets/img/portfolio/nutrial_mobile/light/nutritionist_home.png"),
              caption: this.$i18n.t(
                "portfolio.nutrial_mobile.caption_nutritionist_home"
              ),
              text: this.$i18n.t(
                "portfolio.nutrial_mobile.text_nutritionist_home"
              ),
            },
            {
              src: require("@/assets/img/portfolio/nutrial_mobile/light/nutritionist_patients.png"),
              caption: this.$i18n.t(
                "portfolio.nutrial_mobile.caption_nutritionist_patients"
              ),
              text: this.$i18n.t(
                "portfolio.nutrial_mobile.text_nutritionist_patients"
              ),
            },
            {
              src: require("@/assets/img/portfolio/nutrial_mobile/light/nutritionist_patient.png"),
              caption: this.$i18n.t(
                "portfolio.nutrial_mobile.caption_nutritionist_patient"
              ),
              text: this.$i18n.t(
                "portfolio.nutrial_mobile.text_nutritionist_patient"
              ),
            },
            /*
              Dark Theme
            */
            {
              src: require("@/assets/img/portfolio/nutrial_mobile/dark/change_theme.png"),
              caption: this.$i18n.t(
                "portfolio.nutrial_mobile.caption_change_theme"
              ),
              text: this.$i18n.t("portfolio.nutrial_mobile.text_change_theme"),
            },
            {
              src: require("@/assets/img/portfolio/nutrial_mobile/dark/patient_home.png"),
              caption: this.$i18n.t(
                "portfolio.nutrial_mobile.caption_patient_home"
              ),
              text: this.$i18n.t("portfolio.nutrial_mobile.text_patient_home"),
            },
            {
              src: require("@/assets/img/portfolio/nutrial_mobile/dark/patient_meals.png"),
              caption: this.$i18n.t(
                "portfolio.nutrial_mobile.caption_patient_meals"
              ),
              text: this.$i18n.t("portfolio.nutrial_mobile.text_patient_meals"),
            },
            {
              src: require("@/assets/img/portfolio/nutrial_mobile/dark/patient_charts.png"),
              caption: this.$i18n.t(
                "portfolio.nutrial_mobile.caption_patient_charts"
              ),
              text: this.$i18n.t(
                "portfolio.nutrial_mobile.text_patient_charts"
              ),
            },
            {
              src: require("@/assets/img/portfolio/nutrial_mobile/dark/change_password.png"),
              caption: this.$i18n.t(
                "portfolio.nutrial_mobile.caption_change_password"
              ),
              text: this.$i18n.t(
                "portfolio.nutrial_mobile.text_change_password"
              ),
            },
            {
              src: require("@/assets/img/portfolio/nutrial_mobile/dark/nutritionist_home.png"),
              caption: this.$i18n.t(
                "portfolio.nutrial_mobile.caption_nutritionist_home"
              ),
              text: this.$i18n.t(
                "portfolio.nutrial_mobile.text_nutritionist_home"
              ),
            },
            {
              src: require("@/assets/img/portfolio/nutrial_mobile/dark/nutritionist_patients.png"),
              caption: this.$i18n.t(
                "portfolio.nutrial_mobile.caption_nutritionist_patients"
              ),
              text: this.$i18n.t(
                "portfolio.nutrial_mobile.text_nutritionist_patients"
              ),
            },
            {
              src: require("@/assets/img/portfolio/nutrial_mobile/dark/nutritionist_patient.png"),
              caption: this.$i18n.t(
                "portfolio.nutrial_mobile.caption_nutritionist_patient"
              ),
              text: this.$i18n.t(
                "portfolio.nutrial_mobile.text_nutritionist_patient"
              ),
            },
          ],
        },
        {
          title: this.$i18n.t("portfolio.catalog.title"),
          description: this.$i18n.t("portfolio.catalog.description"),
          images: [
            {
              src: require("@/assets/img/portfolio/catalog_1.png"),
              caption: this.$i18n.t("portfolio.catalog.caption1"),
              text: this.$i18n.t("portfolio.catalog.text1"),
            },
            {
              src: require("@/assets/img/portfolio/catalog_2.png"),
              caption: this.$i18n.t("portfolio.catalog.caption2"),
              text: this.$i18n.t("portfolio.catalog.text2"),
            },
            {
              src: require("@/assets/img/portfolio/catalog_3.png"),
              caption: this.$i18n.t("portfolio.catalog.caption3"),
              text: this.$i18n.t("portfolio.catalog.text3"),
            },
          ],
        },
        {
          title: this.$i18n.t("portfolio.shop.title"),
          description: this.$i18n.t("portfolio.shop.description"),
          images: [
            {
              src: require("@/assets/img/portfolio/shop_1.png"),
              caption: this.$i18n.t("portfolio.shop.caption1"),
              text: this.$i18n.t("portfolio.shop.text1"),
            },
            {
              src: require("@/assets/img/portfolio/shop_2.png"),
              caption: this.$i18n.t("portfolio.shop.caption2"),
              text: this.$i18n.t("portfolio.shop.text2"),
            },
            {
              src: require("@/assets/img/portfolio/shop_3.png"),
              caption: this.$i18n.t("portfolio.shop.caption3"),
              text: this.$i18n.t("portfolio.shop.text3"),
            },
          ],
        },
        {
          title: this.$i18n.t("portfolio.pass.title"),
          description: this.$i18n.t("portfolio.pass.description"),
          images: [
            {
              src: require("@/assets/img/portfolio/pass_1.png"),
              caption: this.$i18n.t("portfolio.pass.caption1"),
              text: this.$i18n.t("portfolio.pass.text1"),
            },
            {
              src: require("@/assets/img/portfolio/pass_2.png"),
              caption: this.$i18n.t("portfolio.pass.caption2"),
              text: this.$i18n.t("portfolio.pass.text2"),
            },
          ],
        },
        {
          title: this.$i18n.t("portfolio.images_large.title"),
          description: this.$i18n.t("portfolio.images_large.description"),
          images: [
            {
              src: require("@/assets/img/portfolio/images_large_1.png"),
            },
            {
              src: require("@/assets/img/portfolio/images_large_2.png"),
            },
            {
              src: require("@/assets/img/portfolio/images_large_3.png"),
            },
          ],
        },
        {
          title: this.$i18n.t("portfolio.images_wide.title"),
          description: this.$i18n.t("portfolio.images_wide.description"),
          images: [
            {
              src: require("@/assets/img/portfolio/images_wide_1.png"),
            },
            {
              src: require("@/assets/img/portfolio/images_wide_2.png"),
            },
          ],
        },
        {
          title: this.$i18n.t("portfolio.animation.title"),
          description: this.$i18n.t("portfolio.animation.description"),
          images: [
            {
              src: require("@/assets/img/portfolio/animation_1.gif"),
              caption: this.$i18n.t("portfolio.animation.caption1"),
              text: this.$i18n.t("portfolio.animation.text1"),
            },
          ],
        },
        {
          title: this.$i18n.t("portfolio.rdr2review.title"),
          description: this.$i18n.t("portfolio.rdr2review.description"),
          embed: "https://www.youtube.com/embed/OK8GxxseuxU",
          nomodal: true,
        },
        {
          title: this.$i18n.t("portfolio.cp2077hypeometro.title"),
          description: this.$i18n.t("portfolio.cp2077hypeometro.description"),
          embed: "https://www.youtube.com/embed/9K3M_UCLLEo",
          nomodal: true,
        },
        {
          title: this.$i18n.t("portfolio.daysgonehypeometro.title"),
          description: this.$i18n.t("portfolio.daysgonehypeometro.description"),
          embed: "https://www.youtube.com/embed/ruWI75zD4pM",
          nomodal: true,
        },
        {
          title: this.$i18n.t("portfolio.cp2077instagram.title"),
          description: this.$i18n.t("portfolio.cp2077instagram.description"),
          video: require("@/assets/img/portfolio/instagram_1.mp4"),
          aspect: "1by1",
          nomodal: true,
        },
      ];
    },
  },
};
</script>

<style scoped></style>
