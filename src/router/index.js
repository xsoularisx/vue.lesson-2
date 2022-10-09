import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
  },
  {
    path: '/add/:category?/:value?',
    name: 'add',
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import('../views/aboutPage.vue')
    }
  },
  {
    path: '*',
    name: 'error404',
    component: function () {
      return import('../views/error404Page.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
