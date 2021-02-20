<template>
  <b-container class="about">
    <b-row>
      <b-col>
        <h1>{{ $t("about.title") }}</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p>{{ $t("about.description") }}</p>
        <p v-html="$t('about.currently')"></p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "About",
};
</script>

<style></style>
