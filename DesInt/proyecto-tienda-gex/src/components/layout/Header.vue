<template>
    <v-app-bar app>
        <v-toolbar-title @click="$router.push('/')">
            GEX
        </v-toolbar-title>

        <v-spacer />

        <v-btn to="/">Inicio</v-btn>
        <v-btn to="/products">Catálogo</v-btn>
        <v-btn to="/favorites">Favoritos</v-btn>
        <v-btn to="/contact">Contacto</v-btn>
    </v-app-bar>
</template>