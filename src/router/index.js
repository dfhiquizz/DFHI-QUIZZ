import { createRouter, createWebHistory } from "vue-router";

const routes = [


  {
    path: "/",
    name: "WelcomePage",
    component: () => import("../components/WelcomePage.vue"),
  },
   {
    path: "/Copyright",
    name: "Copyright",
    component: () => import("../components/CopyrightDfhi.vue"),
  },
  {
    path: "/Essai4",
    name: "Essai4",
    component: () => import("../components/Essai4.vue"),
  },
  {
    path: "/AboutUs",
    name: "AboutUs",
    component: () => import("../components/AboutUs.vue"),
  },
  {
    path: "/AllQuiz",
    name: 'quizzes',
    //component: () => import("../pages/QuizzesPage.vue"),
  },


];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
