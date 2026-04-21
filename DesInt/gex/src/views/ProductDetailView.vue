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

                        <p class="text-subtitle-1 mb-2">
                            Marca: {{ product.brand?.name }}
                        </p>

                        <p class="text-body-1 mb-4">
                            {{ product.description }}
                        </p>

                        <p class="mb-2">
                            Precio con IVA: {{ priceWithIVA }} €
                        </p>

                        <p class="mb-2">
                            Descuento: {{ product.discount }}%
                        </p>

                        <h2 class="text-h5 text-primary mb-2">
                            Precio final: {{ finalPrice }} €
                        </h2>

                        <p class="mb-2">
                            Stock: {{ product.stock }} unidades
                        </p>

                        <p class="mb-4">
                            Categorías: {{ product.categories?.map(category => category.name).join(', ') }}
                        </p>

                        <v-rating
                            v-model="rating"
                            color="amber"
                            density="comfortable" />

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
        </v-container>
    </MainLayout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import { fetchProductById, fetchProductsByCategory } from '@/services/api'

const route = useRoute()
const router = useRouter()

const product = ref(null)
const rating = ref(3)
const loading = ref(true)

const priceWithIVA = computed(() => {
    if (!product.value) return 0
    return (product.value.price * 1.21).toFixed(2)
})

const finalPrice = computed(() => {
    if (!product.value) return 0

    return (
        product.value.price - (product.value.price * product.value.discount) / 100
    ).toFixed(2)
})

const goBack = () => {
    router.back()
}

onMounted(async () => {
    try {
        product.value = await fetchProductById(route.params.id)
    } catch (error) {
        console.error(error)
    } finally {
        loading.value = false
    }
})
</script>