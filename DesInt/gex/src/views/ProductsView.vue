<template>
    <MainLayout>
        <v-container class="py-10">
            <v-row>
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
                            v-model="sortOption"
                            :items="sortOptions"
                            label="Ordenar por" />
                    </v-card>
                </v-col>

                <v-col cols="12" md="9">
                    <v-row>
                        <v-col v-for="product in filteredProducts" :key="product.id" cols="12" sm="6" md="4">
                            <v-card class="h-100">
                                <v-img :src="product.image" height="200" cover />

                                <v-card-title>
                                    {{ product.name }}
                                </v-card-title>

                                <v-card-subtitle>
                                    {{ product.brand?.name }}
                                </v-card-subtitle>

                                <v-card-text>
                                    {{ product.price }}
                                </v-card-text>

                                <v-card-actions>
                                    <v-btn color="primary" :to="`/products/${product.id}`">
                                        Ver detalle
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </MainLayout>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue';
import {
    fetchProducts,
    fetchCategories,
    fetchProductsByCategory
} from '@/services/api'

const route = useRoute()

const products = ref([])
const categories = ref([])
const search = ref('')
const selectedCategory = ref(route.query.category || null)
const selectedBrand = ref(null)
const sortOption = ref('Nombre')
const loading = ref(true)

const sortOptions = ['Nombre', 'Precio menor', 'Precio mayor']

const brands = computed(() => {
    let filtered = [...products.value]

    if (search.value) {
        filtered = filtered.filter(product => 
            product.name.toLowerCase().includes(search.value.toLowerCase())
        )
    }

    if (selectedBrand.value) {
        filtered = filtered.filter(
            product => product.brand?.name === selectedBrand.value
        )
    }

    if (sortOption.value === 'Precio menor') {
        filtered.sort((a, b) => a.price - b.price)
    }

    if (sortOption.value === 'Precio mayor') {
        filtered.sort((a, b) => b.price - a.price)
    }

    if (sortOption.value === 'Nombre') {
        filtered.sort((a, b) => a.name.localCompare(b.name))
    }

    return filtered
})

const loadProducts = async() => {
    loading.value = true

    try {
        if (selectedCategory.value) {
            products.value = await fetchProductsByCategory(selectedCategory.value)
        } else {
            products.value = await fetchProducts()
        }
    } catch(error) {
        console.error(error)
    } finally {
        loading.value = false
    }
}

watch(
    () => route.query.category,
    async (newCategory) => {
        selectedCategory.value = newCategory || null
        await loadProducts()
    }
)

onMounted(async () => {
    try {
        categories.value = await fetchCategories()
        await loadProducts()
    } catch (error) {
        console.error(error)
    }
})
</script>