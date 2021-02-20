import Vue from "vue";
import VueRouter from "vue-router";
import VueMeta from "vue-meta";

import Home from "../views/Home.vue";
import InDevelopment from "../views/InDevelopment.vue";
import Error404 from "../views/Error404.vue";

Vue.use(VueRouter);
Vue.use(VueMeta);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "Home - AS" },
    //redirect: { name: "InDevelopment" },
  },
  {
    path: "/dev",
    name: "InDevelopment",
    component: InDevelopment,
    meta: { title: "En construcción - AS" },
  },
  {
    path: "*",
    name: "Error404",
    component: Error404,
    meta: { title: "404 - AS" },
  },
  /*,
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" asterisk/ "../views/About.vue")
  }*/
];

const router = new VueRouter({
  mode: "history",
  routes: routes,
});

/*router.afterEach(to => {
  Vue.nextTick(() => {
    document.title = to.meta.title(to);
  });
});*/

/*// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(
    document.querySelectorAll("[data-vue-router-controlled]")
  ).map((el) => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach((tag) => document.head.appendChild(tag));

  next();
});*/

export default router;
