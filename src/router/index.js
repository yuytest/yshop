/*
*路由器对象模块
*/

import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../../src/pages/MSite/MSite.vue'
import Search from '../../src/pages/Search/Search.vue'
import Order from '../../src/pages/Order/Order.vue'
import Profile from '../../src/pages/Profile/Profile.vue'
import Login from '../../src/pages/Login/Login'
Vue.use(VueRouter)
export default new VueRouter({
  routes:[
    {
      path:'/msite',
      component:MSite,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/',
      redirect:'/msite'
    },
    {
      path:'/login',
      component:Login
    }
  ]
})
