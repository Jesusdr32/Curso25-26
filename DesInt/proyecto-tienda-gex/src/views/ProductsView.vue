<template>
    <v-container>
        <CategoryBoard :categories="categories" @select="goToCategory" />

        <FilterBar @filter="applyFilter" />

        <ProductBoard :products="filtered" />
    </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import CategoryBoard from '../components/categories/CategoryBoard.vue'
import ProductBoard from '../components/products/ProductBoard.vue'
import * as productService from '../services/productService'
import * as categoryService from '../services/categoryService'

const route = useRoute()
const router = useRouter()

const products = ref([])
const filtered = ref([])
const categories = ref([])

onMounted(async () =>  {
    categories.value = (await categoryService.getCategories()).data

    if (route.query.category) {
        products.value = (await productService.getProductsByCategory(route.query.category)).data
    } else {
        products.value = (await productService.getProducts()).data
    }

    filtered.value = [...products.value]
})

const applyFilter = ({ order, brand }) => {
    let result = [...products.value]

    if (brand) {
        result = result.filter(p => 
            p.brand.brandName.toLowerCase().includes(brand.toLowerCase())
        )
    }

    if (order === 'asc') {
        result.sort((a, b) => a.productPrice - b.productPrice)
    } else if (order === 'desc') {
        result.sort((a, b) => b.productPrice - a.productPrice)
    }

    filtered.value = result
}

const goToCategory = (cat) => {
    router.push(`/products?category=${cat.id}`)
    location.reload()
}
</script>