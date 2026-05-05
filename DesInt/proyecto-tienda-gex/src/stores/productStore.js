import { defineStore } from 'pinia'
import * as productService from '../services/productService'

export const useProductStore = defineStore('products', {
    state: () => ({
        products: [],
        categories: []
    }),

    actions: {
        async loadProducts() {
            const res = await productService.getProducts()
            this.products = res.data
        }
    }
})