<template>
  <div class="card">
    <h4>{{ product.nombre }}</h4>
    <p>{{ product.precio }} €</p>
    <button @click="emitDelete">Eliminar</button>
    <button @click="emitDuplicate">Duplicar</button>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  emits: ["delete"],
  methods: {
    emitDelete() {
      this.$emit("delete", this.product.id);
    },
    emitDuplicate() {
      this.$emit("duplicate", this.product);
    },
  },
};
</script>
<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 6px;
}
</style>
