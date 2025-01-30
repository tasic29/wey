import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore({
  id: "user",

  state: () => ({
    user: {
      isAuthenticated: false,
      id: null,
      name: null,
      email: null,
      access: null,
      refresh: null,
    },
  }),
  actions: {
    initStore() {
      console.log("initStore", localStorage.getItem("user.access"));

      if (localStorage.getItem("user.access")) {
        console.log("User has access!");

        this.user.access = localStorage.getItem("user.access");
        this.user.refresh = localStorage.getItem("user.refresh");
        this.user.id = localStorage.getItem("user.id");
        this.user.name = localStorage.getItem("user.name");
        this.user.email = localStorage.getItem("user.email");
        this.user.isAuthenticated = true;

        this.refreshToken();

        console.log("Initialized user:", this.user);
      }
    },
  },
});
