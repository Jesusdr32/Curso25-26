<template>
    <HeaderComponent />

    <v-main class="bg-grey-lighten-4">
        <slot />
    </v-main>

    <FooterComponent />
</template>

<script setup>
import HeaderComponent from '@/components/layout/HeaderComponent.vue';
import FooterComponent from '@/components/layout/FooterComponent.vue';
</script>