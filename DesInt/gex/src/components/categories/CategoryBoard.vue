<template>
    <v-row>
        <v-col v-for="category in categories" :key="category.id" cols="12" sm="6" md="4"> 
            <v-card class="pa-4 text-center cursor-pointer h-100" hover @click="$emit('select-category', category.id)">
                <v-img :src="category.image || 'https://dummyimage.com/300x200/cccccc/000000&text=Categoria'" height="150" cover />

                <v-card-title>
                    {{ category.name }}
                </v-card-title>

                <v-card-text>
                    {{ category.description }}
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
defineProps({
    categories: {
        type: Array,
        default: () => []
    }
})

defineEmits(['select-category'])
</script>