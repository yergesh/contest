import { createRouter, createWebHistory } from "vue-router"
import { defineAsyncComponent } from "vue"
import Skeleton from "@/views/Skeleton.vue";
const routes = [
  {
    path: '/',
    name: "home",
    component: defineAsyncComponent({
      loader: () => import("@/views/Home.vue"),
      loadingComponent: Skeleton
    }),
    meta: {
      layout: defineAsyncComponent({
        loader: () => import("@/components/layout/MainLayout.vue"),
        loadingComponent: Skeleton
      }),
    }
  },
  {
    path: '/problems',
    name: "problems",
    component: defineAsyncComponent(() => import("@/views/ProblemsView.vue")),
    meta: {
      layout: defineAsyncComponent(() => import("@/components/layout/MainLayout.vue")),
    }
  },
  {
    path: '/problems/:id',
    name: "problem",
    component: defineAsyncComponent(() => import("@/views/ProblemView.vue")),
    meta: {
      layout: defineAsyncComponent(() => import("@/components/layout/MainLayout.vue")),
    },
    props: true
  },
  {
    path: '/about',
    name: "about",
    component: defineAsyncComponent(() => import("@/views/AboutView.vue")),
    meta: {
      layout: defineAsyncComponent(() => import("@/components/layout/MainLayout.vue")),
    }
  },
  {
    path: '/attempts',
    name: "attempts",
    component: defineAsyncComponent(() => import("@/views/MyAttemptsView.vue")),
    meta: {
      layout: defineAsyncComponent(() => import("@/components/layout/MainLayout.vue")),
    }
  },
  {
    path: '/login',
    name: "login",
    component: defineAsyncComponent(() => import("@/views/Login.vue")),
    meta: {
      layout: defineAsyncComponent(() => import("@/components/layout/LoginLayout.vue")),
    }
  },
  {
    path: '/signup',
    name: "signup",
    component: defineAsyncComponent(() => import("@/views/Register.vue")),
    meta: {
      layout: defineAsyncComponent(() => import("@/components/layout/LoginLayout.vue")),
    }
  },
  {
    path: '/AddProblem',
    name: "AddProblem",
    component: defineAsyncComponent(() => import("@/views/AddProblemView.vue")),
    meta: {
      layout: defineAsyncComponent(() => import("@/components/layout/MainLayout.vue")),
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
