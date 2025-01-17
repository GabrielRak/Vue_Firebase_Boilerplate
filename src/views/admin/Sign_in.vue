<template>
  <div class="sign_in mx-auto mt-44 text-center w-3/12">
    <h1 class="font-semibold mb-8 text-2xl">Your_Brand</h1>
    <h3 class="font-semibold mb-4 text-xl">Sign in to your dashboard</h3>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="email">Email:</label><br />
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label><br />
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Sign In</button>
    </form>
    {{ error }}
  </div>
</template>

<script>
import { ref } from "vue";
import { useAuthStore } from "../../store/authStore";

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
