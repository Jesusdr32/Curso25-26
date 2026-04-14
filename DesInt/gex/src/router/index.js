import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import ProductsView from '../views/ProductsView.vue';
import AboutView from '../views/AboutView.vue';
import { components } from 'vuetify/dist/vuetify.js';

const routes = [
    { path: '/', component: HomeView },
    { path: '/productos', component: ProductsView },
    { path: '/about', component: AboutView }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;