import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/Login'
import Admin from '@/components/Admin'
import Products from '@/components/pages/Products'
import CustomerOrders from '@/components/pages/CustomerOrders'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: 'products',
          name: 'products',
          component: Products,
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: 'customeroders',
          name: 'customeroders',
          component: CustomerOrders
          // meta: { requiresAuth: true } 不需要驗證就可以使用
        }
      ]
    }
  ]
})
