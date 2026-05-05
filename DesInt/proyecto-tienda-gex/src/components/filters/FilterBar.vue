<template>
    <v-row>
        <v-col cols="6">
            <v-select
            label="Ordenar por precio"
            :items="['asc', 'desc']"
            v-model="order"
            @update:modelValue="emitFilter" />
        </v-col>

        <v-col cols="6">
            <v-text-field
            label="Filtrar por marca"
            v-model="brand"
            @input="emitFilter" />
        </v-col>
    </v-row>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['filter'])

const order = ref(null)
const brand = ref('')

const emitFilter = () => {
    emit('filter', {
        order: order.value,
        brand: brand.value
    })
}
</script>