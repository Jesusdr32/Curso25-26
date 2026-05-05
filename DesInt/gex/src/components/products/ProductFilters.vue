<template>
  <SidebarFilters
    :search="search"
    :selected-category="selectedCategory"
    :selected-brand="selectedBrand"
    :sort-option="sortOption"
    :categories="categories"
    :brands="brands"
    :sort-options="sortOptions"
    @update:search="$emit('update:search', $event)"
    @update:selectedCategory="$emit('update:selectedCategory', $event)"
    @update:selectedBrand="$emit('update:selectedBrand', $event)"
    @update:sortOption="$emit('update:sortOption', $event)"
  />
</template>

<script setup>
import SidebarFilters from './SidebarFilters.vue'

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