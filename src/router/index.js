import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
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
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
