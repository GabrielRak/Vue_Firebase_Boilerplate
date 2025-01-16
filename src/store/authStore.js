import { defineStore } from "pinia";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { router } from "../router";
export const useAuthStore = defineStore("authStore", {
    state: () => ({
        user: null,
        authenticated:false,
        loading: false,
        error: null
    }),
    actions: {
        async login(email, password) {
            this.loading = true;
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                this.user = userCredential.user;
                router.push("/");
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
            return new Promise((resolve) => {
                onAuthStateChanged(auth, (user) => {
                    this.setUser(user);
                    resolve(user);
                });
            });
        },
        async logout() {
            this.loading = true;
            try {
                await signOut(auth);
                this.user = null;
                this.error = null;
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
        }
    }
});
