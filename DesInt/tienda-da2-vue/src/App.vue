<template>
  <div>
    <h1>Catálogo</h1>
    <ProductList
    :productos="productos"
    @delete-product="eliminarProducto"
    @duplicate-product="duplicarProducto"
    />
  </div>
</template>

<script>
import { productosIniciales } from './data/productos';
import ProductList from './components/ProductList.vue';

export default {
  name: "App",
  components: { ProductList },
  data() {
    return { productos: productosIniciales };
  },
  methods: {
    eliminarProducto(id) {
      this.productos = this.productos.filter(p => p.id !== id);
    },
    duplicarProducto(product) {
      const nuevo = { ...product, id: Date.now() };
      this.productos.push(nuevo);
    }
  }
};
</script>

