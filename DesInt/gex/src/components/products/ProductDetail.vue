<template>
    <v-card class="pa-6">
        <v-row>
            <v-col cols="12" md="5">
                <v-img :src="product.image || 'https://dummyimage.com/500x400/cccccc/000000&text=Producto'" height="400" cover />
            </v-col>

            <v-col col="12" md="7">
                <h1 class="text-h4 mb-4">{{ product.name }}</h1>

                <p class="mb-2">Marca: {{ product.brand?.name }}</p>
                <p class="mb-2">Stock: {{ product.stock }}</p>
                <p class="mb-2">Descuento: {{ product.discount }}</p>

                <h2 class="text-h5 text-primary mb-4">
                    {{ product.price }}
                </h2>

                <p class="mb-4">
                    {{ product.description }}
                </p>

                <div class="mt-6 d-flex ga-4">
                    <v-btn color="primary" @click="$emit('back')">
                        Volver
                    </v-btn>

                    <v-btn color="secondary" @click="$emit('favorite', product)">
                        Añadir a favoritos
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </v-card>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    product: Object,
    rating: Number
})

const internalRating = ref(props.rating || 3)

defineEmits(['back', 'favorite'])
</script>