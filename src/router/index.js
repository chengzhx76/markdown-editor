import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/', 
    component: () => import('@/views/markdown')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router