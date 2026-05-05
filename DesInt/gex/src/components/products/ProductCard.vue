<template>
    <v-card class="h-100 d-flex flex-column">
        <v-img :src="ProductDetail.image || 'https://dummyimage.com/400x300/cccccc/000000&text=Producto'" height="220" cover />

        <v-card-title>
            {{ product.name }}
        </v-card-title>

        <v-card-subtitle>
            {{ product.brand?.name }}
        </v-card-subtitle>

        <v-car-text>
            <p class="text-body-2 mb-2">
                {{ product.description?.slice(0, 80) }}
            </p>

            <p class="text-h6 text-primary font-weight-bold">
                {{ product.price }} €
            </p>
        </v-car-text>

        <v-spacer />

        <v-card-actions>
            <v-btn color="primary" :to="`/products/${product.id}`">
                Ver detalle
            </v-btn>

            <v-btn icon color="pink" @click="$emit('favorite', product)">
                <v-icon>mdi-heart</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
defineProps({
    product:Object
})

defineEmits(['favorite'])
</script>