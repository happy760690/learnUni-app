import { defineStore } from 'pinia'

interface UserState {
  token: string
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: uni.getStorageSync('token') || ''
  }),

  actions: {
    setToken(token: string) {
      this.token = token
      uni.setStorageSync('token', token)
    },

    logout() {
      this.token = ''
      uni.removeStorageSync('token')
    }
  }
})
