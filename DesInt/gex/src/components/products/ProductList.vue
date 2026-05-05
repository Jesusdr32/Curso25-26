<template>
  <v-row>
    <v-col
      v-for="product in products"
      :key="product.id"
      cols="12"
      sm="6"
      md="4"
    >
      <ProductCard
        :product="product"
        @favorite="$emit('favorite', $event)"
      />
    </v-col>
  </v-row>
</template>

<script setup>
import ProductCard from './ProductCard.vue'

defineProps({
  products: {
    type: Array,
    default: () => []
  }
})

defineEmits(['favorite'])
</script>