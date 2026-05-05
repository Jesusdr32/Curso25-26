<template>
  <div>
    <p class="mb-2">Valoración del producto</p>

    <v-rating
      :model-value="modelValue"
      color="amber"
      half-increments
      hover
      @update:model-value="$emit('update:modelValue', $event)"
    />
  </div>
</template>

<script setup>
defineProps({
  modelValue: Number
})

defineEmits(['update:modelValue'])
</script>