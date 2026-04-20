<template>
    <MainLayout>
        <v-container class="py-10">
            <h1 class="text-h4 mb-6">Favoritos</h1>

            <v-alert type="info" v-if="favorites.length === 0">
                No hay productos favoritos todavía.
            </v-alert>

            <v-row>
                <v-col v-for="product in favorites" :key="product.id" cols="12" sm="6" md="4">
                    <v-card>
                        <v-img :src="product.image" height="200" cover />

                        <v-card-title>
                            {{ product.title }}
                        </v-card-title>

                        <v-card-actions>
                            <v-btn color="primary" :to="`/products/${product.id}`">
                                Ver detalle
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </MainLayout>
</template>

<script setup>
import { ref } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'

const favorites = ref([])
</script>