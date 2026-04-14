<template>
    <div>
        <ProductCounter :total="productos.length" />

        <v-row>
            <v-col cols="12" md="4" v-for="p in productos" :key="p.id">
                <ProductCard :producto="p" @eliminar="eliminarProducto" />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import ProductCard from './ProductCard.vue';
import ProductCounter from '../common/ProductCounter.vue';
import { products } from '../../data/products';

export default {
    components: { ProductCard, ProductCounter },

    data() {
        return {
            productos: [...products]
        }
    },

    methods: {
        eliminarProducto(id) {
            this.productos = this.productos.filter(p => p.id !== id)
        }
    }
}
</script>