import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/HomeView.vue'
import Products from '../views/ProductsView.vue'
import Favorites from '../views/FavoritesView.vue'
import Contact from '../views/ContactView.vue'

const routes = [
  {path: '/', component: Home},
  {path: '/products', component: Products},
  {path: '/favorites', component: Favorites},
  {path: '/contact', component: Contact}
]

export default createRouter({
  history: createWebHistory(),
  routes
})
