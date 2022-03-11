<template>
  <b-navbar class="footer" fixed="bottom" type="dark" variant="dark">
    <b-nav-text class="mx-auto text-center">
      <span id="footer-span">
        Alexander Schilling
        <font-awesome-icon icon="copyright" />
        {{ new Date().getFullYear() }}
      </span>
    </b-nav-text>
  </b-navbar>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  font-family: Consolas;
  height: 2rem;
}

#footer-span {
  font-size: 1rem;
}

#app {
  margin-bottom: 3rem;
}
</style>
