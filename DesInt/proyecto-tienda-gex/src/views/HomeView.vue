<template>
    <div>
        <v-container>

            <v-card class="pa-5 mb-5">
                <h1>Bienvenido a GEX</h1>
                <p>Tu tienda online de videojuegos favorita</p>
            </v-card>

            <h2>Categorías</h2>
            <CategoryBoard :categories="categories" @select="goToCategory" />

            <h2 class="mt-5">Destacados</h2>
            <ProductBoard :products="randomProducts" />
        </v-container>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import CategoryBoard from '../components/categories/CategoryBoard.vue'
import ProductBoard from '../components/products/ProductBoard.vue'
import * as categoryService from '../services/categoryService'
import * as productService from '../services/productService'
import { useRouter } from 'vue-router'

const router = useRouter()

const categories = ref([])
const products = ref([])

const randomProducts = ref([])

onMounted(async () => {
    categories.value = (await categoryService.getCategories()).data
    products.value = (await productService.getProducts()).data

    randomProducts.value = products.value.sort(() => 0.5 - Math.random()).slice(0, 4)
})

const goToCategory = (cat) => {
    router.push(`/products?category=${cat.id}`)
}
</script>