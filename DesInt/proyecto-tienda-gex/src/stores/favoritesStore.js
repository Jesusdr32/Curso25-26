import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
    state: () => ({
        items: []
    }),

    actions: {
        toggle(product) {
            const index = this.items.findIndex(p => p.productId === product.productId)

            if (index >= 0) {
                this.items.splice(index, 1)
            } else {
                this.items.push({ ...product, level: 1 })
            }
        }
    }
})