import { defineStore } from 'pinia'
import * as cartService from '../services/authService'

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: null
    }),

    actions: {
        async loadCart() {
            const res = await cartService.getCart()
            this.cart = res.data
        },

        async add(productId) {
            const res = await cartService.addToCart(productId, 1)
            this.cart = res.data
        },

        async remove(productId) {
            const res = await cartService.removeFromCart(productId)
            this.cart = res.data
        },

        async clear() {
            const res = await cartService.clearCart()
            this.cart = res.data
        }
    }
})