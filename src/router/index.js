import { createRouter, createWebHistory } from 'vue-router'
import Products from '../components/products/Products'
import Home from '../components/home/Home'
import LoginOrSignup from '../components/user/LoginOrSignup'
const routes = [
  {
    path: '/Products',
    name: 'Products',
    component: Products
  },
  {
    path: '/loginSignupModal',
    name: 'loginOrSignup',
    component: LoginOrSignup
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router