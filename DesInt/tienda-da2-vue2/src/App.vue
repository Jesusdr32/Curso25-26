
<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>
        Tienda DA2
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item title="Inicio" />
        <v-list-item title="Productos" />
        <v-list-item title="Pedidos" />
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <h1>Bienvenido a la tienda</h1>
        <v-row>
          <v-col cols="4">
            <v-card>
              <v-card-title>Producto 1</v-card-title>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card>
              <v-card-title>Producto 2</v-card-title>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card>
              <v-card-title>Producto 3</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
// Importar componentes y ficheros de datos
import ProductList from './components/ProductList.vue';

export default {
  name: "App",
  components: { ProductList },
  data() {
    return {
      drawer: true,
    };
  },
  methods: {
    eliminarProducto(id) {
      this.productos = this.productos.filter((p) => p.id !== id);
    },
    agregarProducto() {
      if (this.nuevoProducto.trim() !== "") {
        this.productos.push(this.nuevoProducto);
        this.nuevoProducto = "";
      }
    },
    duplicarProducto(product) {
      const nuevo = {
        ...product,
        id: Date.now(),
      };
      this.productos.push(nuevo);
    },
  },
  computed: {
    totalProductos() {
      return this.productos.length;
    },
  },
};
</script>

<style scoped>
.layout {
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  color: #2c3e50;
  margin-bottom: 10px;
}

p {
  color: #555;
  margin-bottom: 20px;
}
</style>
