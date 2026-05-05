<template>
    <v-sheet class="pa-10 text-center rounded-lg bg-grey-lighten-3">
        <v-icon size="80" color="grey">mdi-package-variant-remove</v-icon>

        <h2 class="text-h5 mt-4 mb-2">
            {{ title }}
        </h2>

        <p class="text-body-1 text-grey-darken-1">
            {{ message }}
        </p>
    </v-sheet>
</template>

<script setup>
defineProps({
    title: String,
    message: String
})
</script>