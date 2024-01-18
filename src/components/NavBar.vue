<template>
  <b-navbar id="navBar" toggleable="lg" type="dark" variant="dark" fixed="top">
    <b-navbar-brand href="/">
      <vue-typed-js
        :strings="['Alexander', 'Schilling']"
        :loop="true"
        :showCursor="false"
        :typeSpeed="50"
        :backSpeed="100"
        :backDelay="5000"
      >
        <span>
          <b-img src="~@/assets/img/logo.png" alt="AS" fluid />
          > <span class="typing"></span
          ><span :style="{ opacity: inputOpacity }">_</span>
        </span>
      </vue-typed-js>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" :style="navCollapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="text-center" href="/#about">
          <font-awesome-icon icon="user" size="lg" />
          <br />
          {{ $t("navbar.about") }}
        </b-nav-item>

        <!--b-nav-item class="text-center" :href="resume">
          <font-awesome-icon icon="user-tie" size="lg" />
          <br />
          {{ $t("navbar.resume") }}
        </b-nav-item-->

        <b-nav-item
          class="text-center"
          href="mailto:contact@alexanderschilling.cl"
        >
          <font-awesome-icon icon="envelope" size="lg" />
          <br />
          {{ $t("navbar.contact") }}
        </b-nav-item>

        <b-nav-item
          class="text-center"
          href="https://www.linkedin.com/in/alexander-schilling-miranda"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" size="lg" />
          <br />
          {{ $t("navbar.linkedin") }}
        </b-nav-item>

        <b-nav-item
          class="text-center"
          href="https://github.com/alexander-schilling"
        >
          <font-awesome-icon :icon="['fab', 'github']" size="lg" />
          <br />
          {{ $t("navbar.github") }}
        </b-nav-item>

        <b-nav-item-dropdown class="text-center" no-caret>
          <template slot="button-content">
            <font-awesome-icon icon="globe" size="lg" />
            <br />
            {{ $t("navbar.language") }}
          </template>
          <b-dropdown-item
            @click="$store.dispatch('setLocale', { locale: 'en', i18n: $i18n })"
            >English
          </b-dropdown-item>
          <b-dropdown-item
            @click="$store.dispatch('setLocale', { locale: 'es', i18n: $i18n })"
            >Español
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      inputOpacity: 255,
      navCollapseToggled: false,
      navCollapse: {
        backgroundColor: `rgba(34, 31, 34, 0.0) !important`,
      },
    };
  },
  computed: {
    resume() {
      return this.$i18n.t("resume.href");
    },
  },
  methods: {
    consoleInputEffect() {
      setTimeout(() => {
        this.inputOpacity == 255
          ? (this.inputOpacity = 0)
          : (this.inputOpacity = 255);
        this.consoleInputEffect();
      }, 750);
    },
    onClick() {
      this.navCollapseToggled = !this.navCollapseToggled;
      if (this.navCollapseToggled) {
        this.navCollapse.backgroundColor = `rgba(34, 31, 34, 1.0) !important`;
      } else {
        this.navCollapse.backgroundColor = `rgba(34, 31, 34, 0.0) !important`;
      }
    },
  },
  mounted() {
    this.consoleInputEffect();
  },
};
</script>

<style lang="scss">
#navBar {
  font-family: Consolas;
}

#navBar img {
  height: 3rem;
}

#app {
  padding-top: 75px;
}
</style>
