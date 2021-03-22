import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [{
  path: '/green',
  name: 'green',
  component: () =>
    import ('../views/Green.vue')
}, {
  path: '/yellow',
  name: 'yellow',
  component: () =>
    import ('../views/Yellow.vue')
}, {
  path: '/red',
  name: 'red',
  component: () =>
    import ('../views/Red.vue')
}]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (['green', 'yellow', 'red'].indexOf(to.name) == -1) next({ name: store.state.currentColor })
  else next()
})

export default router