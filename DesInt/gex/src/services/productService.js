import {
    fetchProducts,
    fetchProductById,
    fetchProductsByCategory
} from './api'

function normalizeProducts(response) {
    return Array.isArray(response) ? response : response?.data || []
}

function formatProduct(product) {
    return {
        ...product,
        priceWithIVA: (product.price * 1.21).toFixed(2),

        finalPrice: (
            product.price - (product.price * product.discount) / 100
        ).toFixed(2),

        stockStatus:
            product.stock > 10
                ? 'Disponible'
                : product.stock > 0
                ? 'Pocas unidades'
                : 'Sin stock'
    }
}

export async function getAllProducts() {
    const response = await fetchProducts()
    const products = normalizeProducts(response)

    return products.map(formatProduct)
}

export async function getProductById(id) {
    const product = await fetchProductById(id)

    return formatProduct(product)
}

export async function getProductsByCategory(categoryId) {
    const response = await fetchProductsByCategory(categoryId)
    const products = normalizeProducts(response)

    return products.map(formatProduct)
}