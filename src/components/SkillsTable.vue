<template>
  <b-table
    :fields="fields"
    :items="items"
    thead-class="d-none"
    borderless
    small
  >
    <template #cell(skill)="data">
      <b>{{ data.item.skill }}</b>
    </template>

    <template #cell(level)="data">
      <skill-level :level="data.item.level"></skill-level>
    </template>
  </b-table>
</template>

<script>
import SkillLevel from "./SkillLevel.vue";

export default {
  props: {
    fields: {
      type: Array,
      default() {
        return [
          { key: "skill", label: this.$i18n.t("skills.skill") },
          { key: "level", label: this.$i18n.t("skills.level") },
        ];
      },
    },
    items: {
      type: Array,
      required: true,
    },
  },
  components: {
    "skill-level": SkillLevel,
  },
};
</script>

<style></style>
