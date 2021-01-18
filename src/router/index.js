import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('views/home/Home.vue');
const Cart = () => import('views/cart/Cart.vue');
const Profile = () => import('views/profile/Profile.vue');
const Category = () => import('views/category/Category.vue');
const Detail = () => import('views/detail/Detail');

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/detail/:id',
    component: Detail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
