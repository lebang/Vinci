import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Main = () => import ('@/pages/Main.vue');

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  }
  // , {   // path: '/view', name: 'view', component: () => import   //
  // ('./pages/view/deep-wrap') }
]

const router = new VueRouter({routes});

export default router;
