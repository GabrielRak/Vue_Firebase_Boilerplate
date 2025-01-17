<template>
  <div
    class="flex px-24 py-8 w-full mx-auto justify-between items-center bg-gray-800 text-white"
  >
    <div class="brand font-poppins text-2xl">
      <RouterLink to="/">
        <span id="brand" class="font-semibold">Economic Compass</span>
      </RouterLink>
    </div>
    <div class="flex items-center space-x-6">
      <RouterLink to="/about" class="hover:text-gray-400"
        ><span class="menu-item font-medium">About</span></RouterLink
      >
      <RouterLink to="/articles" class="hover:text-gray-400"
        ><span class="menu-item mx-4 font-medium">Articles</span></RouterLink
      >
      <RouterLink to="/contact" class="hover:text-gray-400"
        ><span class="menu-item font-medium">Contact</span></RouterLink
      >
      <RouterLink to="/dashboard" class="hover:text-gray-400" v-if="!user"
        ><span class="menu-item font-medium">Admin</span></RouterLink
      >
      <div v-if="user" class="ml-4">
        {{ user.email }}
      </div>
      <button
        v-if="user"
        @click="logout"
        class="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "../store/authStore";
import { computed } from "vue";
export default {
  name: "Navbar",
  data() {
    const logout = useAuthStore().logout;

    const user = computed(() => {
      return useAuthStore().user;
    });

    return {
      user,
      logout,
    };
  },
};
</script>
<style lang="scss"></style>
