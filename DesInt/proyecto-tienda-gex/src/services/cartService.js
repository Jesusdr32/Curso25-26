import api from './api'

export const getCart = () =>
    api.get('/cart')

export const addToCart = (productId, units) =>
    api.post('/cart', { productId, units })

export const removeFromCart = (productId) =>
    api.delete(`/cart/${productId}`)

export const clearCart = () =>
    api.delete('/cart')