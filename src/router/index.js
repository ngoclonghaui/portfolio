import Vue from 'vue'
import VueRouter from 'vue-router'
import admin from '@/contents/admin.vue'
import mainscreen from '@/contents/mainscreen.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: mainscreen
  },
  {
    path: '/admin',
    component: admin
  },
  {
    path: '/mainscreen',
    component: mainscreen
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0, behavior: 'smooth' }
  }
})

export default router
