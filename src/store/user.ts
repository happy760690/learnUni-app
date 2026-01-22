import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    token: "",
  }),
  actions: {
    setToken(token) {
      this.token = token;
      uni.setStorageSync("token", token);
    },
  },
});
