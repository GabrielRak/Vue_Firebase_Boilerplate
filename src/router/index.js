import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Base/Home.vue";
import PostDetail from "../views/Base/articles/Article.vue";
import Articles from "../views/Base/articles/Articles.vue";
import Contact from "../views/Base/Contact.vue";
import About from "../views/Base/About.vue";
import Sign_in from "../views/admin/Sign_in.vue";
import Dashboard from "../views/admin/Dashboard.vue";
import AddPost from "../views/admin/AddPost.vue";
import { useAuthStore } from "../store/authStore";
const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path:'/about',
      name:"About",
      component:About,
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
      path:"/sign_in",
      name:"SignIn",
      component:Sign_in,
    },
    {
      path:'/dashboard',
      name:"Dashboard",
      component:Dashboard,
      meta:{requiresAuth:true},
    },
    {
      path:'/admin/add-post',
      name:"Post Form",
      component:AddPost,
      meta:{requiresAuth:true},
    }
  ]

const router = createRouter({
  history:createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {

  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.authenticated) {
    next('/sign_in');
  } else {
    next(); 
  }
});


export { router };
