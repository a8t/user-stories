import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
