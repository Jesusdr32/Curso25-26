<template>
    <v-card class="pa-4">
        <v-text-field :model-value="search" label="Buscar producto" prepend-inner-icon="mdi-magnify" @update:model-value="$emit('update:search', $event)" />

        <v-select :model-value="selecctedCategory" :items="categories" item-title="name" item-value="id" aria-label="Categoría" clearable @update:model-value="$emit('update:selectedCategory', $event)" /> 

        <v-select :model-value="selectedBrand" :items="brands" label="Marca" clearable @update:model-value="$emit('update:selectedBrand', $event)" />

        <v-select :model-value="sortOption" :items="sortOptions" label="Ordenar or" @update:model-value="$emit('update:selectedBrand', $event)" />
    </v-card>
</template>

<script setup>
defineProps({
    search: String,
    selectedCategory: [String, Number, null],
    selectedBrand: String,
    sortOption: String,
    categories: Array,
    brands: Array,
    sortOptions: Array
})

defineEmits([
    'update:search',
    'update:selectedCategory',
    'update:selectedBrand',
    'update:sortOption'
])
</script>