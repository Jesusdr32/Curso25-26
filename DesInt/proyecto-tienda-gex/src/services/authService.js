import api from './api'

export const login = (data) => {
    return api.post('/auth/login', data)
}

export const refresh = (refreshToken) => {
    return api.post('/auth/refresh', {
        value: refreshToken
    })
}