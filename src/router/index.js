import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/pages/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: resolve => require(['@/pages/Home.vue'], resolve)
    },
    {
      name: 'Hello',
      path: '/hello',
      component: resolve => require(['@/pages/Hello.vue'], resolve)
    },
    {
      name: 'es6',
      path: '/es6',
      component: resolve => require(['@/pages/Es6.vue'], resolve)
    },
    {
      name: 'vuex',
      path: '/vuex',
      component: resolve => require(['@/pages/Vuex.vue'], resolve)
    },
    {
      name: 'elem',
      path: '/elem',
      component: resolve => require(['@/pages/ElementUi.vue'], resolve)
    }
  ]
})
