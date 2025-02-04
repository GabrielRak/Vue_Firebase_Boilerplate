<template>
  <div class="navbar">
    <div>
      <router-link to="/">
        <span id="brand">Economic Compass</span>
      </router-link>
    </div>
    <div class="menu">
      <router-link to="/articles"><span class="menu__item">Articles</span></router-link>
      <router-link to="/contact"><span class="menu__item">Contact</span></router-link>
      <router-link to="/dashboard" v-if="!user"><span class="menu__item">Sign in</span></router-link>
      <router-link to="/dashboard" v-if="user"><span class="menu__item">Admin</span></router-link>
      <button v-if="user" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "../store/auth/authStore";
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
<style lang="scss" scoped>

.navbar{
  display:flex;
  justify-content:space-around;
  padding:30px 0px;

  #brand{
    font-size: 25px;
    font-weight: 700;
    font-family:'poppins';
  }

  .menu{

    &__item{
      font-size:18px;
      font-weight: 600;
      margin-right:20px;
      padding:8px;

      &:last-child
      {
        margin-right:0px;
      }

      &:hover{
        background-color:rgba(0,0,0,0.1);
        border-radius:5px;
      }
    }

  }

}

</style>
