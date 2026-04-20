<template>
    <MainLayout>
        <v-container class="py-10">
            <v-card v-if="product" class="pa-6">
                <v-row>
                    <v-col cols="12" md="5">
                        <v-img :src="product.image" height="400" cover />
                    </v-col>

                    <v-col cols="12" md="7">
                        <h1 class="text-h4 mb-4">{{ product.title }}</h1>

                        <p class="text-subtitle-1 mb-2">
                            Marca: {{ product.brand }}
                        </p>

                        <p class="text-body-1 mb-4">
                            {{ product.description }}
                        </p>

                        <h2 class="text-h5 text-primary mb-2">
                            {{ product.price }} €
                        </h2>

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
import MainLayout from '@/layouts/MainLayout.vue';

const route = useRoute()
const router = useRouter()

const product = ref(null)
const rating = ref(3)

const goBack = () => {
    router.back()
}

onMounted(async () => {
    const response = await fetch(`http://localhost:8000/products/${route.params.id}`)
    product.value = await response.json()
})
</script>