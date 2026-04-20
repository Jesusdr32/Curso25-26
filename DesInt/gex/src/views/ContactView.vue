<template>
    <MainLayout>
        <v-container class="py-10">
            <v-row>
                <v-col cols="12" md="6">
                    <h1 class="text-h4 mb-4">Contacto</h1>
                    <p>Email: contacto@gex.com</p>
                    <p>Teléfono: 600 123 456</p>
                    <p>Dirección: Calle Verde 25, Madrid</p>
                </v-col>

                <v-col cols="12" md="6">
                    <v-card class="pa-6">
                        <v-text-field v-model="name" label="Nombre" />
                        <v-text-field v-model="email" label="Email" type="email" />
                        <v-textarea v-model="message" label="Mensaje" />
                        <v-checkbox v-model="accepted" label="Acepto las condiciones" />

                        <v-btn color="primary" class="mt-4" @click="sendForm">
                            Enviar
                        </v-btn>
                    </v-card>
                </v-col>
            </v-row>

            <v-dialog v-model="dialog" width="500">
                <v-card class="pa-6">
                    <h2 class="mb-4">Información enviada</h2>
                </v-card>
            </v-dialog>
        </v-container>
    </MainLayout>
</template>