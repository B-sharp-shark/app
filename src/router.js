import { createWebHistory, createRouter } from "vue-router";
import LoginPage from "./pages/login.vue";
import HomePage from "./pages/home.vue";
import RegisterPage from "./pages/register.vue";
import CoursesPage from "./pages/courses.vue";
import ProfilePage from "./pages/profile.vue";
//Vue.use(Router)
const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterPage,
  },
  {
    path: "/courses",
    name: "courses",
    component: CoursesPage,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfilePage,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
