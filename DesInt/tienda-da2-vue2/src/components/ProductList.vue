<template>
  <div>
    <ProductCard
      v-for="p in productos"
      :key="p.id"
      :product="p"
      @delete="handleDelete"
      @duplicate="handleDuplicate"
    />
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  name: "ProductList",
  components: { ProductCard },
  props: {
    productos: {
      type: Array,
      required: true,
    },
  },
  emits: ["delete-product", "duplicate-product"],
  methods: {
    handleDelete(id) {
      this.$emit("delete-product", id);
    },
    handleDuplicate(product) {
      this.$emit("duplicate-product", product);
    },
  },
};
</script>
