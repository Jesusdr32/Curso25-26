<template>
    <v-app-bar color="primary" dark>
        <v-toolbar-title>🎮 GEX</v-toolbar-title>

        <v-spacer />

        <!-- Categorías -->
         <v-btn v-for="cat in categories" :key="cat.id" text>
            {{ cat.name }}
         </v-btn>
    </v-app-bar>
</template>

<script>
import { categories } from '../../data/categories';
export default {
    data() {
        return { categories }
    },
};
</script>