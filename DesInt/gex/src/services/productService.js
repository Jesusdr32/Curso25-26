import {
    fetchProducts,
    fetchProductById,
    fetchProductsByCategory
} from './api'

export async function getAllProducts() {
    const products = await fetchProducts()

    return products.map(product => ({
        ...product,
        priceWithIVA: (product.price * 1.21).toFixed(2),

        finalPrice: (
            product.price - (product.price * product.discount) / 100
        ).toFixed(2),

        stockStatus: product.stock > 10 ? 'Disponible' : product.stock > 0 ? 'Pocas unidades' : 'Sin stock'
    }))
}

export async function getProductById(id) {
    const product = await fetchProductById(id)

    return {
        ...product,

        priceWithIVA: (product.price * 1.21).toFixed(2),

        finalPrice: (
            product.price - (product.price * product.discount) / 100
        ).toFixed(2)
    }
}

export async function getProductsByCategory(categoryId) {
    const products = await fetchProductsByCategory(categoryId)

    return products.map(product => ({
        ...product,

        priceWithIVA: (product.price * 1.21).toFixed(2)
    }))
}