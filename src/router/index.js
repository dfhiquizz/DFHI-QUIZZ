import { createRouter, createWebHistory } from "vue-router";

const routes = [


  { path: "/Home", 
    name: "Essai1",
   component: () => import("../components/WelcomePage.vue"), 
  },
  {
    path: "/AllQuiz",
    name: 'quizzes',
    //component: () => import("../pages/QuizzesPage.vue"),
}

];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
