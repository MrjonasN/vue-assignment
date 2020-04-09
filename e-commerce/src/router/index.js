import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products.vue'
import Product from '../views/Product.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Checkout from '../views/Checkout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Products',
    component: Products
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product,
    props: true
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    props: true
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    props: true
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
    props: true
    // Sätt guard här. Access bara om man är inloggad
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
