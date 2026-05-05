const API_URL = 'http://localhost:8000/api/v1'

function getAuthHeaders() {
    const token = localStorage.getItem('gex-access-token')

    return {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` })
    }
}

async function handleResponse(response) {
    const data = await response.json().catch(() => null)

    if (!response.ok) {
        throw new Error(data?.message || 'Error en la petición')
    }

    return data
}

export async function fetchProducts() {
    const response = await fetch(`${API_URL}/products`, {
        headers: getAuthHeaders()
    })

    return handleResponse(response)
}

export async function fetchProductById(id) {
    const response = await fetch(`${API_URL}/products/${id}`, {
        headers: getAuthHeaders()
    })

    return handleResponse(response)
}

export async function fetchCategories() {
    const response = await fetch(`${API_URL}/categories`, {
        headers: getAuthHeaders()
    })

    return handleResponse(response)
}

export async function fetchProductsByCategory(categoryId) {
    const response = await fetch(`${API_URL}/categories/${categoryId}/products`, {
        headers: getAuthHeaders()
    })

    return handleResponse(response)
}