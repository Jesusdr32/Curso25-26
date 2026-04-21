const API_URL = 'http://localhost:8000/api/v1'

export async function fetchProducts() {
    const response = await fetch(`${API_URL}/products`)

    if (!response.ok) {
        throw new Error('Error al cargar productos')
    }

    return await response.json()
}

export async function fetchProductById(id) {
    const response = await fetch(`${API_URL}/products/${id}`)

    if (!response.ok) {
        throw new Error('Producto no encontrado')
    }

    return await response.json()
}

export async function fetchCategories() {
    const response = await fetch(`${API_URL}/categories`)

    if (!response.ok) {
        throw new Error('Error al cargar categorías')
    }

    return await response.json()
}

export async function fetchProductsByCategory(categoryId) {
    const response = await fetch(`${API_URL}/categories/${categoryId}/products`)

    if (!response.ok) {
        throw new Error('Error al cargar productos de la categoría')
    }

    return await response.json()
}