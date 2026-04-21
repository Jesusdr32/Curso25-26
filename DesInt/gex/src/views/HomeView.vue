<template>
    <MainLayout>
        <v-container class="py-10">
            <v-row>
                <v-col cols="12">
                    <v-sheet color="primary" class="rounded-x1 pa-10 text-center text-white">
                        <h1 class="text-h3 font-weight-bold mb-4">
                            Bienvenido a GEX
                        </h1>
                        <p class="text-h6 mb-6">
                            Videojuegos para todos los públicos a precios económicos
                        </p>

                        <v-btn color="white" to="/products">
                            Ver catálogo
                        </v-btn>
                    </v-sheet>
                </v-col>
            </v-row>

            <v-row class="mt-8">
                <v-col cols="12">
                    <h2 class="text-h4 mb-4">Categorías</h2>
                </v-col>

                <v-col v-for="category in categories"
                        :key="category.id"
                        cols="12"
                        sm="6"
                        md="3">
                    <v-card class="pa-6 text-center cursor-pointer" @click="goToCategory(category.id)">
                        <v-icon size="40" color="primary">mdi-shape</v-icon>
                        <h3 class="mt-4">{{ category.name }}</h3>
                    </v-card>
                </v-col>
            </v-row>

            <v-row class="mt-8">
                <v-col cols="12">
                    <h2 class="text-h4 mb-4">Oferta del día</h2>
                </v-col>

                <v-col cols="12" md="6">
                    <v-card v-if="featuredProduct">
                        <v-img :src="featuredProduct.image" height="300" cover />

                        <v-card-title>
                            {{ featuredProduct.title }}
                        </v-card-title>

                        <v-card-text>
                            {{ featuredProduct.description }}
                        </v-card-text>

                        <v-card-actions>
                            <v-btn color="primary" :to="`/products/${featuredProduct.id}`">
                                Ver detalle
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </MainLayout>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import { fetchCategories, fetchProducts } from '@/services/api'

const router = useRouter()

const categories = ref([])
const featuredProduct = ref(null)
const loading = ref(true)

const goToCategory = (categoryId) => {
    router.push(`/products?category=${categoryId}`)
}

onMounted(async () => {
    try {
        categories.value = await fetchCategories()

        const products = await fetchProducts()

        if (products.length > 0) {
            featuredProduct.value = products[0]
        }
    } catch (error) {
        console.error(error)
    } finally {
        loading.value = false
    }
})
</script>