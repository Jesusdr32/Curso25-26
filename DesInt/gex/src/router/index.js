import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'
import FavoritesView from '@/views/FavoritesView.vue'
import ContactView from '@/views/ContactView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/products',
    component: ProductsView
  },
  {
    path: '/products/:id',
    component: ProductDetailView
  },
  {
    path: '/favorites',
    component: FavoritesView
  },
  {
    path: '/contact',
    component: ContactView
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router