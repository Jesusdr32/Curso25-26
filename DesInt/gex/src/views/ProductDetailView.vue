<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

import { getProductById } from '@/services/productService'

const route = useRoute()
const router = useRouter()

const product = ref(null)
const loading = ref(false)
const rating = ref(3)

const goBack = () => {
    router.back()
}

onMounted(async () => {
    loading.value = true

    try {
        product.value = await getProductById(route.params.id)
        console.log('PRODUCTO:', product.value)
    } catch (error) {
        console.error('ERROR DETALLE:', error.message)
    } finally {
        loading.value = false
    }
})
</script>

<template>
    <MainLayout>
        <v-container class="py-10">

            <v-card v-if="product" class="pa-6">
                <v-row>

                    <v-col cols="12" md="5">
                        <v-img :src="product.image" height="400" cover />
                    </v-col>

                    <v-col cols="12" md="7">
                        <h1 class="text-h4 mb-4">{{ product.name }}</h1>

                        <p class="mb-2">
                            Marca: {{ product.brand?.name }}
                        </p>

                        <p class="mb-4">
                            {{ product.description }}
                        </p>

                        <p>Precio con IVA: {{ product.priceWithIVA }} €</p>
                        <p>Descuento: {{ product.discount }}%</p>

                        <h2 class="text-primary">
                            Precio final: {{ product.finalPrice }} €
                        </h2>

                        <p>Stock: {{ product.stock }} ({{ product.stockStatus }})</p>

                        <p>
                            Categorías:
                            {{ product.categories?.map(c => c.name).join(', ') }}
                        </p>

                        <v-rating v-model="rating" color="amber" />

                        <div class="mt-6 d-flex ga-4">
                            <v-btn color="primary" @click="goBack">
                                Volver
                            </v-btn>

                            <v-btn color="secondary">
                                Añadir a favoritos
                            </v-btn>
                        </div>
                    </v-col>

                </v-row>
            </v-card>

            <!-- ⏳ loading -->
            <div v-else-if="loading">
                Cargando producto...
            </div>

            <!-- 💀 error -->
            <div v-else>
                Producto no encontrado
            </div>

        </v-container>
    </MainLayout>
</template>