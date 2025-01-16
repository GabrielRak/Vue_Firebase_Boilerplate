<template>
  <div class="flex px-24 py-8 w-2/3 mx-auto justify-around">
    <div class="brand font-poppins">
      <RouterLink to="/">
      <span id="brand" class="font-semibold">Economic Compass</span>
      </RouterLink>
    </div>
    <div>
      <RouterLink to="/about"><span class="menu-item font-medium">About</span></RouterLink>
      <RouterLink to="/articles"><span class="menu-item mx-4 font-medium">Articles</span></RouterLink>
      <RouterLink to="/contact"><span class="menu-item font-medium">Contact</span></RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
<style lang="scss">

</style>
