<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

import {
    getAllProducts,
    getProductsByCategory
} from '@/services/productService'

import { fetchCategories } from '@/services/api'

const route = useRoute()

const products = ref([])
const categories = ref([])
const search = ref('')
const selectedCategory = ref(route.query.category || null)
const selectedBrand = ref(null)
const sortOption = ref('Nombre')
const loading = ref(false)

const sortOptions = ['Nombre', 'Precio menor', 'Precio mayor']

// 🏷️ marcas únicas
const brands = computed(() => {
    return [...new Set(
        products.value.map(p => p.brand?.name).filter(Boolean)
    )]
})

// 🔍 filtro + orden
const filteredProducts = computed(() => {
    let filtered = [...products.value]

    if (search.value) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(search.value.toLowerCase())
        )
    }

    if (selectedBrand.value) {
        filtered = filtered.filter(
            p => p.brand?.name === selectedBrand.value
        )
    }

    if (sortOption.value === 'Precio menor') {
        filtered.sort((a, b) => a.finalPrice - b.finalPrice)
    }

    if (sortOption.value === 'Precio mayor') {
        filtered.sort((a, b) => b.finalPrice - a.finalPrice)
    }

    if (sortOption.value === 'Nombre') {
        filtered.sort((a, b) => a.name.localeCompare(b.name))
    }

    return filtered
})

const loadProducts = async () => {
    loading.value = true

    try {
        const response = await fetch('http://localhost:8000/api/v1/products')
        const data = await response.json()

        console.log('RAW RESPONSE:', data)
        console.log('TYPE:', typeof data)

        products.value = data
    } catch (error) {
        console.error('ERROR PRODUCTOS:', error)
    } finally {
        loading.value = false
    }
}

// 🚀 carga de productos
-/*const loadProducts = async () => {
    loading.value = true

    try {
        if (selectedCategory.value) {
            products.value = await getProductsByCategory(selectedCategory.value)
        } else {
            products.value = await getAllProducts()
        }

        console.log('PRODUCTOS:', products.value)
    } catch (error) {
        console.error('ERROR PRODUCTOS:', error.message)
        products.value = []
    } finally {
        loading.value = false
    }
}*/

// 🔄 cambio por query
watch(
    () => route.query.category,
    async (newCategory) => {
        selectedCategory.value = newCategory || null
        await loadProducts()
    }
)

// 🟢 init
onMounted(async () => {
    try {
        categories.value = await fetchCategories()
        await loadProducts()
    } catch (error) {
        console.error(error)
    }
})
</script>

<template>
    <MainLayout>
        <v-container class="py-10">

            <v-row>
                <!-- FILTROS -->
                <v-col cols="12" md="3">
                    <v-card class="pa-4">
                        <v-text-field
                            v-model="search"
                            label="Buscar producto"
                            prepend-inner-icon="mdi-magnify" />

                        <v-select
                            v-model="selectedCategory"
                            :items="categories"
                            item-title="name"
                            item-value="id"
                            label="Categoría" />

                        <v-select
                            v-model="selectedBrand"
                            :items="brands"
                            label="Marca"
                            clearable />

                        <v-select
                            v-model="sortOption"
                            :items="sortOptions"
                            label="Ordenar por" />
                    </v-card>
                </v-col>

                <!-- PRODUCTOS -->
                <v-col cols="12" md="9">
                    <v-row>
                        <v-col
                            v-for="product in filteredProducts"
                            :key="product.id"
                            cols="12"
                            sm="6"
                            md="4"
                        >
                            <v-card class="h-100">
                                <v-img :src="product.image" height="200" cover />

                                <v-card-title>
                                    {{ product.name }}
                                </v-card-title>

                                <v-card-subtitle>
                                    {{ product.brand?.name }}
                                </v-card-subtitle>

                                <v-card-text>
                                    {{ product.finalPrice }} €
                                </v-card-text>

                                <v-card-actions>
                                    <v-btn color="primary" :to="`/products/${product.id}`">
                                        Ver detalle
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>

                        <!-- 🪦 vacío -->
                        <v-col v-if="!loading && filteredProducts.length === 0" cols="12">
                            <p>No hay productos 😢</p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

        </v-container>
    </MainLayout>
</template>