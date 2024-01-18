<template>
  <b-container>
    <b-row class="mb-3">
      <b-col>
        <h1>
          <font-awesome-icon :icon="['fas', 'brain']" />
          {{ $t("skills.title") }}
        </h1>
      </b-col>
    </b-row>
    <b-row cols="1" cols-xs="1" cols-sm="1" cols-md="1" cols-lg="2" cols-xl="4">
      <b-col>
        <h3>{{ $t("skills.programming") }}</h3>
        <skills-table :items="programming"></skills-table>
      </b-col>
      <b-col>
        <h3>{{ $t("skills.frameworks") }}</h3>
        <skills-table :items="frameworks"></skills-table>
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
        { skill: "Python", level: 4 },
        { skill: "HTML/JS/TS/CSS", level: 4 },
        { skill: "C#", level: 3 },
        { skill: "Ruby on Rails", level: 2 },
      ],
      frameworks: [
        { skill: "React", level: 5 },
        { skill: "React Native", level: 4 },
        { skill: "Vue.js", level: 3 },
        { skill: "Angular", level: 2 },
      ],
      misc: [
        { skill: "Windows", level: 5 },
        { skill: "SQL", level: 4 },
        { skill: "Linux", level: 3 },
        { skill: "Oracle", level: 2 },
        { skill: "MongoDB", level: 2 },
        { skill: "Unity 3D", level: 2 },
      ],
      other: [
        { skill: "Microsoft Office", level: 4 },
        { skill: "Adobe Photoshop", level: 4 },
        { skill: "Adobe Premiere Pro", level: 3 },
        { skill: "Adobe After Effects", level: 3 },
        { skill: "Blender", level: 2 },
        { skill: "Adobe Illustrator", level: 1 },
      ],
    };
  },
};
</script>

<style></style>
