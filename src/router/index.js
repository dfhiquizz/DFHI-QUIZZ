import { createRouter, createWebHistory } from "vue-router";

const routes = [


  {
    path: "/",
    name: "HomePage",
    component: () => import("../components/HomePage.vue"),
  },
  {
    path: "/Copyright",
    name: "Copyright",
    component: () => import("../components/CopyrightDfhi.vue"),
  },
  {
    path: "/Kontakt",
    name: "Kontakt",
    component: () => import("../components/KontaktUs.vue"),
  },
  {
    path: "/AboutUs",
    name: "AboutUs",
    component: () => import("../components/AboutUs.vue"),
  },
  {
    path: "/AllQuiz",
    name: 'quizzes',
    component: () => import("../webpage/ThemePage.vue"),
    //component: () => import("../pages/QuizzesPage.vue"),
  },

  {
    path: "/dfhi-quiz/:id",
    name: 'dfhi-quiz',
    component: () => import("../webpage/QuizPage.vue")
  }


];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
