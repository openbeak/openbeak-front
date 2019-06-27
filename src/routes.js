  import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import UserMap from '@/components/UserMap'

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/:id',
      component: UserMap
    }
  ]
})
