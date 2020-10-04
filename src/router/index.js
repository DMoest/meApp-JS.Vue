import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Me",
    component: () => import(/* webpackChunkName: "me" */ "@/views/me")
  },
  {
    path: "/reports/",
    name: "Report",
    component: () => import(/* webpackChunkName: "report" */ "@/views/report")
  },
  {
    path: "/testarea/",
    name: "Testarea",
    component: () =>
      import(/* webpackChunkName: "testarea" */ "@/views/testarea")
  }
];

const router = new VueRouter({
  linkExactActiveClass: "navbar-activeLink",
  routes
});

export default router;
