import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Base/Home.vue";
import PostDetail from "../views/Base/articles/Article.vue";
import Articles from "../views/Base/articles/Articles.vue";
import Contact from "../views/Base/Contact.vue";
import Sign_in from "../views/auth/Sign_in.vue";
import Dashboard from "../views/admin/Dashboard.vue";
import { useAuthStore } from "../store/auth/authStore";
import Sign_up from "../views/auth/Sign_up.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/articles",
    name: "Articles",
    component: Articles,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/post/:id",
    name: "PostDetail",
    component: PostDetail,
    props: true,
  },
  {
    path: "/sign_in",
    name: "SignIn",
    component: Sign_in,
  },
  {
    path: "/sign_up",
    name: "SignUp",
    component: Sign_up,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();

  if (!authStore.authenticated) {
    await authStore.checkAuth();
  }

  if (to.meta.requiresAuth && !authStore.authenticated) {
    next("/sign_in");
  } else {
    next();
  }
});

export { router };
