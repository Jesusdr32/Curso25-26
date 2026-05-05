import { defineStore } from 'pinia'
import * as authService from '../services/authService'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        accessToken: localStorage.getItem('accessToken') || null,
        refreshToken: localStorage.getItem('refreshToken') || null,
        user: null
    }),

    getters: {
        isAuthenticated: (state) => !!state.accessToken
    },

    actions: {
        async login(credentials) {
            const res = await authService.login(credentials)

            this.accessToken = res.data.accessToken
            this.refreshToken = res.data.refreshToken

            localStorage.setItem('accessToken', this.accessToken)
            localStorage.setItem('refreshToken', this.refreshToken)
        },

        logout() {
            this.accessToken = null
            this.refreshToken = null
            this.user = null

            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
        },

        async refresh() {
            if (!this.refreshToken) return

            const res = await authService.refresh(this.refreshToken)
            this.accessToken = res.data.value

            localStorage.setItem('accessToken', this.accessToken)
        }
    }
})