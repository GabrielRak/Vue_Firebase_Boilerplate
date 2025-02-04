<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 class="text-2xl font-bold mb-6 text-center">Sign Up</h2>
            <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                    <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
                    <input type="text" id="username" v-model="username" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                </div>                
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" v-model="email" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                </div>
                <div class="mb-4">
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" id="password" v-model="password" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                </div>
                <div class="mb-4">
                    <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input type="password" id="confirmPassword" v-model="confirmPassword" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                </div>
                <button type="submit" class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign Up</button>
            </form>
            <p class="mt-4 text-sm text-red-600">{{ error }}</p>
    <p class="mt-4 text-sm text-gray-600">Already have an account?<router-link to="/sign_in" class="text-indigo-600 hover:text-indigo-500">Sign in</router-link></p>
        </div>
    </div>
</template>

<script>
import { useAuthStore } from '../../store/auth/authStore';

export default {
    data() {

        const authStore = useAuthStore();

        const handleSubmit = () =>{
            authStore.register({
                email: this.email,
                username:this.username,
                password: this.password,
                confirmPassword: this.confirmPassword
            });
        }
        return {
            username:'',
            handleSubmit,
            email: '',
            password: '',
            confirmPassword: ''
        };
    },
};
</script>