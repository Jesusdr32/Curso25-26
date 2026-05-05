<template>
    <v-row>
        <v-col
        v-for="p in products"
        :key="p.productId"
        cols="12" md="3" >
            <ProductCard :product="p" />
        </v-col>
    </v-row>
</template>

<script setup>
import ProductCard from './ProductCard.vue'

defineProps({
    products: Array
})
</script>