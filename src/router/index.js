import Vue from 'vue'
import VueRouter from 'vue-router'
import Tasks from '../views/Tasks.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      // component: HomeView
    },
    {
      path: '/todo',
      name: 'todo',
      component: Tasks
    },
  ]
})

export default router
