<template>
  <b-jumbotron
    id="homeJumbotron"
    :header="$t('home.welcome')"
    text-variant="light"
    fluid
  >
  </b-jumbotron>
</template>

<script>
export default {
  name: "Jumbotron",
};
</script>

<style>
#homeJumbotron {
  background-image: url("../assets/img/background3.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% auto;
  font-family: Consolas;
}
</style>
