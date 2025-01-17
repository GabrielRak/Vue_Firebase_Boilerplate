import { defineStore } from "pinia";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";
import { router } from "../router";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    user: null,
    authenticated: false,
    loading: false,
    error: null,
  }),
  actions: {
    async login(email, password) {
      this.loading = true;
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.setUser(userCredential.user);
        localStorage.setItem("user", JSON.stringify(this.user));
        router.push("/dashboard");
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    setUser(user) {
      this.user = user;
      this.authenticated = user !== null;
    },
    async checkAuth() {
      const savedUser = localStorage.getItem("auth");
      if (savedUser) {
        this.user = JSON.parse(savedUser);
        this.isAuthenticated = true;
      } else {
        this.user = null;
        this.authenticated = false;
        this.isAuthenticated = false;
      }
      return new Promise((resolve) => {
        onAuthStateChanged(auth, (user) => {
          this.setUser(user);
          resolve(user);
        });
      });
    },
    async logout() {
      console.log("logging out");
      try {
        await signOut(auth);
        this.authenticated = null;
        this.setUser(null);
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    init() {
      onAuthStateChanged(auth, (user) => {
        this.user = user;
      });
    },
  },
});
