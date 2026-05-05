<template>
    <v-row>
        <v-col
        v-for="cat in categories"
        :key="cat.id"
        cols="12" md="4" >
            <v-card @click="select(cat)">
                <v-img :src="cat.image" height="150" />
                <v-card-title>{{ cat.name }}</v-card-title>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
const props = defineProps({
    categories: Array
})

const emit = defineEmits(['select'])

const select = (cat) => {
    emit('select', cat)
}
</script>