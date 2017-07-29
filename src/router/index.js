import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Helloworld from '@/components/Helloworld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test/:id',
      name: 'helloworld',
      component: Helloworld
    }
  ]
})
