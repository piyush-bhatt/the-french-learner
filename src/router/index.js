import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/introduction",
    name: "Introduction",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Introduction.vue"),
  },
  {
    path: "/alphabets",
    name: "Alphabets",
    component: () => import("../views/Alphabets.vue"),
  },
  {
    path: "/numbers1",
    name: "Numbers1",
    component: () => import("../views/Numbers1.vue"),
  },
  {
    path: "/numbers2",
    name: "Numbers2",
    component: () => import("../views/Numbers2.vue"),
  },
  {
    path: "/numbers3",
    name: "Numbers3",
    component: () => import("../views/Numbers3.vue"),
  },
  {
    path: "/numbers4",
    name: "Numbers4",
    component: () => import("../views/Numbers4.vue"),
  },
  {
    path: "/days",
    name: "Days",
    component: () => import("../views/Days.vue"),
  },
  {
    path: "/months",
    name: "Months",
    component: () => import("../views/Months.vue"),
  },
  {
    path: "/seasons",
    name: "Seasons",
    component: () => import("../views/Seasons.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
