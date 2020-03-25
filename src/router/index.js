import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
//a change

Vue.use(VueRouter);
const mode = "history";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  // {
  //   path: "/test",
  //   name: "test",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ "../views/Test.vue")
  // },
  {
    path: "/progress",
    name: "prog",
    component: () => import(/* webpackChunkName: "about" */ "../views/Prog.vue")
  },
  {
    path: "/schedule",
    name: "schedule",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Schedule.vue")
  },
  {
    path: "/trackers",
    name: "trackers",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Trackers.vue")
  },
  {
    path: "/wellness-plan/:planId",
    name: "wellness-plan",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/WellnessPlan.vue")
  },
  {
    path: "/giving-back",
    name: "giving-back",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GivingBack.vue")
  },
  {
    path: "/ntention-setter-access",
    name: "ntention-setter-access",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/NtentionSetterAccess.vue"
      )
  },
  {
    path: "/my-ntention-setters",
    name: "my-ntention-setters",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MyNtentionSetters.vue")
  },
  {
    path: "/settings",
    name: "settings",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Settings.vue")
  }
];

const router = new VueRouter({
  routes,
  mode
});

export default router;
