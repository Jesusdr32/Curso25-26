<template>
    <v-app-bar color="primary" dark>
        <v-container class="d-flex align-center">
            <v-btn icon to="/">
                <v-icon>mdi-store</v-icon>
            </v-btn>

            <v-toolbar-title class="font-weight-bold">
                GEX
            </v-toolbar-title>

            <v-spacer /> 

            <v-btn to="/" variant="text">Inicio</v-btn>
            <v-btn to="/products" variant="text">Productos</v-btn>
            <v-btn to="/favorites" variant="text">Favoritos</v-btn>
            <v-btn to="/contact" variant="text">Contacto</v-btn>
        </v-container>
    </v-app-bar>
</template>