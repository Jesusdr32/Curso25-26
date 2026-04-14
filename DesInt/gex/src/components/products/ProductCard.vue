<template>
    <v-card>
        <v-img :src="producto.image" height="200" />

        <v-card-title>{{ producto.name }}</v-card-title>

        <v-card-subtitle>
            {{ producto.brand }}
        </v-card-subtitle>

        <v-card-text>
            Precio con IVA: {{ precioConIVA }} €
        </v-card-text>

        <v-card-actions>
            <v-btn color="red" @click="$emit('eliminar', producto.id)">
                Eliminar
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: ['producto'],

    computed: {
        precioConIVA() {
            return (this.producto.price * 1.21).toFixed(2)
        }
    }
}
</script>