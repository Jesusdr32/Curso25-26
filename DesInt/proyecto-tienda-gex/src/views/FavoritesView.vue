<template>
    <v-container>
        <h2>Favoritos</h2>

        <v-btn to="/products">Volver al catálogo</v-btn>

        <ProductBoard :products="useFavoritesStore.items" />
    </v-container>
</template>

<script setup>
import { useFavoritesStore } from '../stores/favoritesStore'
import ProductBoard from '../components/products/ProductBoard.vue'

const favorites = useFavoritesStore()
</script>