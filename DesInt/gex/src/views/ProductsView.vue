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
                                    {{ product.title }}
                                </v-card-title>

                                <v-card-subtitle>
                                    {{ product.brand }}
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
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue';

const route = useRoute()

const products = ref([])
const categories = ref([])
const search = ref('')
const selectedCategory = ref(route.query.category || null)
const sortOption = ref('Nombre')

const sortOptions = ['Nombre', 'Precio menor', 'Precio mayor']

const filteredProducts = computed(() => {
    let filtered = [...products.value]

    if (search.value) {
        filtered = filtered.filter(product =>
            product.title.toLowerCase().includes(search.value.toLowerCase())
        )
    }

    if (selectedCategory.value) {
        filtered = filtered.filter(product =>
            String(product.categoryId) === String(selectedCategory.value)
        )
    }

    if (sortOption.value === 'Precio menor') {
        filtered.sort((a, b) => a.price - b.price)
    }

    if (sortOption.value === 'Precio menor') {
        filtered.sort((a, b) => b.price - a.price)
    }

    if (sortOption.value === 'Nombre') {
        filtered.sort((a, b) => a.title.localeCompare(b.title))
    }

    return filtered
})

onMounted(async () => {
    const productsResponse = await fetch('http://localhost:8000/products')
    products.value = await productsResponse.json()

    const categoriesResponse = await fetch('http://localhost:8000/categories')
    categories.value = await categoriesResponse.json()
})
</script>