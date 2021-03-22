import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  mode: 'history',
  path: '/',
  name: 'Green',
  component: () =>
    import ('../views/Green.vue')
}]

const router = new VueRouter({
  routes
})

export default router