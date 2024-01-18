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
      style="overflow: -moz-scrollbars-vertical; overflow-x: scroll"
    >
      <workplace
        v-for="(item, index) in workplaces"
        :first="index === 0"
        :last="index === workplaces.length - 1"
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
          title: this.$i18n.t("work.cat.title"),
          subtitle: this.$i18n.t("work.cat.subtitle"),
          description: this.$i18n.t("work.cat.description"),
          imgSrc: require("@/assets/img/work/cat.png"),
          listOthers: this.$i18n.t("work.cat.others"),
          date: this.$i18n.t("work.cat.date"),
          website: "https://www.tarjetacencosud.cl/publico/home",
          linkedin: "https://www.linkedin.com/company/cencosud-scotiabank/",
        },
        {
          title: this.$i18n.t("work.acl.title"),
          subtitle: this.$i18n.t("work.acl.subtitle"),
          description: this.$i18n.t("work.acl.description"),
          imgSrc: require("@/assets/img/work/acl.png"),
          listOthers: this.$i18n.t("work.acl.others"),
          date: this.$i18n.t("work.acl.date"),
          website: "https://www.aclti.com/es/",
          linkedin: "https://www.linkedin.com/company/acltecnologia/",
        },
        {
          title: this.$i18n.t("work.ecmat.title"),
          subtitle: this.$i18n.t("work.ecmat.subtitle"),
          description: this.$i18n.t("work.ecmat.description"),
          imgSrc: require("@/assets/img/work/ecmat.png"),
          listOthers: this.$i18n.t("work.ecmat.others"),
          date: this.$i18n.t("work.ecmat.date"),
          website: "https://ecmat.cl/",
          linkedin: "https://www.linkedin.com/company/ecmatchile/",
        },
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

<style scoped>
::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar {
  height: 8px;
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 2px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
