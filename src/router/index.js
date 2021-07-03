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
  {
    path: "/pronouns",
    name: "Pronouns",
    component: () => import("../views/Pronouns.vue"),
  },
  {
    path: "/greetings",
    name: "Greetings",
    component: () => import("../views/Greetings.vue"),
  },
  {
    path: "/directions",
    name: "Directions",
    component: () => import("../views/Directions.vue"),
  },
  {
    path: "/indefiniteArticles",
    name: "IndefiniteArticles",
    component: () => import("../views/IndefiniteArticles.vue"),
  },
  {
    path: "/definiteArticles",
    name: "DefiniteArticles",
    component: () => import("../views/DefiniteArticles.vue"),
  },
  {
    path: "/verbGroups",
    name: "VerbGroups",
    component: () => import("../views/VerbGroups.vue"),
  },
  {
    path: "/verbGroup1",
    name: "VerbGroup1",
    component: () => import("../views/VerbGroup1.vue"),
  },
  {
    path: "/verbGroup2",
    name: "VerbGroup2",
    component: () => import("../views/VerbGroup2.vue"),
  },
  {
    path: "/verbGroup3",
    name: "VerbGroup3",
    component: () => import("../views/VerbGroup3.vue"),
  },
  {
    path: "/usefulVerbs1",
    name: "UsefulVerbs1",
    component: () => import("../views/UsefulVerbs1.vue"),
  },
  {
    path: "/usefulVerbs2",
    name: "UsefulVerbs2",
    component: () => import("../views/UsefulVerbs2.vue"),
  },
  {
    path: "/etreAvoir",
    name: "EtreAvoir",
    component: () => import("../views/EtreAvoir.vue"),
  },
  {
    path: "/prepositions",
    name: "Prepositions",
    component: () => import("../views/Prepositions.vue"),
  },
  {
    path: "/possesiveAdjectives",
    name: "PossesiveAdjectives",
    component: () => import("../views/PossesiveAdjectives.vue"),
  },
  {
    path: "/demonstrativeAdjectives",
    name: "DemonstrativeAdjectives",
    component: () => import("../views/DemonstrativeAdjectives.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
