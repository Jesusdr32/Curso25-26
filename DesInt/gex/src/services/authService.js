const API_URL = 'http://localhost:8000/api/v1'

export async function login(credentials) {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    })

    const data = await response.json().catch(() => null)

    if (!response.ok) {
        throw new Error(data?.message || 'Credenciales incorrectas')
    }

    return data
}

export function getAccessToken() {
    return localStorage.getItem('gex-access-token')
}

export function setAccessToken(token) {
    localStorage.setItem('gex-access-token', token)
}

export function clearAccessTokens() {
    localStorage.removeItem('gex-access-token')
}