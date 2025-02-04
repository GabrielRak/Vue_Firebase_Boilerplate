<template>
  <div class="sign_in mx-auto mt-44 text-center w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
    <h1 class="font-semibold mb-8 text-2xl text-gray-800">Your_Brand</h1>
    <h3 class="font-semibold mb-4 text-xl text-gray-600">Sign in to your dashboard</h3>
    <form @submit.prevent="handleSubmit">
      <div class="mb-6">
        <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
        <input type="email" v-model="email" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <div class="mb-6">
        <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
        <input type="password" v-model="password" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <button type="submit" class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign In</button>
    </form>
    <p class="mt-4 text-sm text-red-600">{{ error }}</p>
    <p class="mt-4 text-sm text-gray-600">Don't have an account? <router-link to="/sign_up" class="text-indigo-600 hover:text-indigo-500">Sign Up</router-link></p>
  </div>
</template>

<script>
import { ref } from "vue";
import { useAuthStore } from "../../store/auth/authStore";

export default {
  name: "Sign_in",

  setup() {
    const authStore = useAuthStore();
    const email = ref("");
    const password = ref("");
    const error = ref(null);

    const handleSubmit = async () => {
      error.value = null;
      try {
        await authStore.login(email.value, password.value);
      } catch (err) {
        error.value = "Failed to sign in.";
      }
    };

    return {
      email,
      password,
      error,
      handleSubmit,
    };
  },
};
</script>

<style scoped lang="scss">
label {
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 4px;
}

input {
  padding: 3px 8px;
  margin-bottom: 33px;
  border-radius: 10px;
  font-size: 19px;

  &:focus {
    outline: none;
    background-color: red;
  }
}
</style>
