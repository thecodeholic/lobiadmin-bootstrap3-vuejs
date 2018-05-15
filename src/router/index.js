import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard/Dashboard'
import Calendar from '@/components/Calendar/Calendar'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/',
      name: 'HelloWorld',
      redirect: 'dashboard'
    }
  ]
})
