<template>
  <b-container fluid>
    <b-row class="mb-3 pl-4">
      <b-col>
        <h1>
          <font-awesome-icon :icon="['fas', 'briefcase']" />
          {{ $t("work.title") }}
        </h1>
      </b-col>
    </b-row>

    <b-row
      class="mb-3 pb-3 d-flex flex-row flex-nowrap overflow-auto"
      style="overflow: -moz-scrollbars-vertical; overflow-y: scroll"
    >
      <workplace
        v-for="(item, index) in workplaces"
        :key="`workplace_${index}`"
        :title="item.title"
        :subtitle="item.subtitle"
        :description="item.description"
        :imgSrc="item.imgSrc"
        :date="item.date"
        :listOthers="item.listOthers"
        :website="item.website"
        :linkedin="item.linkedin"
      />
    </b-row>
  </b-container>
</template>

<script>
import Workplace from "./Workplace.vue";

export default {
  components: {
    workplace: Workplace,
  },
  computed: {
    workplaces() {
      return [
        {
          title: this.$i18n.t("work.nutrialus.title"),
          subtitle: this.$i18n.t("work.nutrialus.subtitle"),
          description: this.$i18n.t("work.nutrialus.description"),
          imgSrc: require("@/assets/img/work/nutrialus.png"),
          listOthers: this.$i18n.t("work.nutrialus.others"),
          date: this.$i18n.t("work.nutrialus.date"),
          website: "https://nutrialus.com",
          linkedin: "https://www.linkedin.com/company/nutrialus/",
        },
        {
          title: this.$i18n.t("work.hispano.title"),
          subtitle: this.$i18n.t("work.hispano.subtitle"),
          description: this.$i18n.t("work.hispano.description"),
          imgSrc: require("@/assets/img/work/hispano.png"),
          listOthers: this.$i18n.t("work.hispano.others"),
          date: this.$i18n.t("work.hispano.date"),
          website: "https://comunidad-hispano.com",
        },
      ];
    },
  },
};
</script>

<style></style>
