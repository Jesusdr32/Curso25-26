<template>
    <v-row>
        <v-col v-for="product in favorites" :key="product.id" cols="12" sm="6" md="4">
            <ProductCard :product="product" @favorite="$emit('remove-favorite', product.id)" />
        </v-col>
    </v-row>
</template>

<script setup>
import ProductCard from '../products/ProductCard.vue'

defineProps({
    favorites: {
        type: Array,
        default: () => []
    }
})

defineEmits(['remove-favorite'])
</script>