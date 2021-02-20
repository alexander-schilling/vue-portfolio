<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>{{ $t("skills.title") }}</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h3>{{ $t("skills.programming") }}</h3>
        <skills-table :items="programming"></skills-table>
      </b-col>
      <b-col>
        <h3>{{ $t("skills.misc") }}</h3>
        <skills-table :items="misc"></skills-table>
      </b-col>
      <b-col>
        <h3>{{ $t("skills.other") }}</h3>
        <skills-table :items="other"></skills-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SkillsTable from "./SkillsTable.vue";

export default {
  name: "Skills",
  components: {
    "skills-table": SkillsTable,
  },
  data() {
    return {
      programming: [
        { skill: "Lua", level: 5 },
        { skill: "Java", level: 4 },
        { skill: "HTML/JS/CSS", level: 4 },
        { skill: "Python", level: 3 },
        { skill: "C#", level: 3 },
      ],
      misc: [
        { skill: "Windows", level: 5 },
        { skill: "MySQL", level: 4 },
        { skill: "Linux", level: 3 },
        { skill: "Oracle", level: 2 },
        { skill: "Vue.js", level: 2 },
      ],
      other: [
        { skill: "Adobe Photoshop", level: 4 },
        { skill: "Adobe Premiere", level: 3 },
        { skill: "Adobe After Effects", level: 3 },
        { skill: "Adobe Illustrator", level: 1 },
      ],
    };
  },
};
</script>

<style></style>
