import { defineStore } from "pinia";

export const useAuthStore = defineStore("counter", {
  state: () => ({
    auth: false,
    user: {},
  }),
  getters: {
    isAuth: (state) => state.auth,
    getUser: (state) => state.user,
  },
  actions: {
    setUser(payload: any) {
      this.user = payload;
      this.auth = true;
    },
  },
});
