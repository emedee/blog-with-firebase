import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home.vue'
import posts from '@/views/posts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: home,
    name: 'home'
  },
  // {
  //   path: '/home',
  //   component: home,
  //   name: 'home'
  // },
  {
    path : '/posts',
    component: posts,
    name: 'posts'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
