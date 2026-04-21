<template>
    <MainLayout>
        <v-container class="fill-height d-flex align-center justify-center">
            <v-card class="pa-10 text-center">
                <v-icon size="100" color="error">mdi-alert-circle-outline</v-icon>

                <h1 class="text-h3 mt-4">404</h1>
                <p class="text-h6 mt-2">
                    La página que buscas se ha perdido en el bosque digital.
                </p>

                <v-btn color="primary" class="mt-6" to="/">
                    Volver al inicio
                </v-btn>
            </v-card>
        </v-container>
    </MainLayout>
</template>