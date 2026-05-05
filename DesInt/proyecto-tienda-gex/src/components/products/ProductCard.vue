<template>
    <v-card class="ma-2">
        <v-img :src="imageUrl" height="200" cover />

        <v-card-title>{{ product.productName }}</v-card-title>

        <v-card-subtitle>
            {{ product.brand?.brandName }}
        </v-card-subtitle>

        <v-card-text>
            <div>Precio base: {{ product.productPrice }} €</div>
            <div>IVA: {{ priceIVA.toFixed(2) }} €</div>
            <div>Descuento: {{ priceDiscount.toFixed(2) }} €</div>
        </v-card-text>

        <v-card-actions>
            <v-btn icon @click="toggleFav">
                ❤️
            </v-btn>

            <v-btn icon @click="addCart">
                🛒
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
import { priceWithIVA, priceWithDiscount } from '../../utils/priceUtils'
import { useFavoritesStore } from '../../stores/favoritesStore'
import { useCartStore } from '../../stores/cartStore'

const props = defineProps({
    product: Object
})

const favorites = useFavoritesStore()
const cart = useCartStore()

const priceIVA = priceWithIVA(props.product.productPrice)
const priceDiscount = priceWithDiscount(
    props.product.productPrice,
    props.product.productDiscount
)

const imageUrl = `/imgs/${props.product.productImage || 'default.jpg'}`

const toggleFav = () => {
    favorites.toggle(props.product)
}

const addCart = () => {
    cart.add(props.product.productId)
}
</script>