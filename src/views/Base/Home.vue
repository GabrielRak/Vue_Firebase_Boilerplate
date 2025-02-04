<template> 
<div class="w-full mx-auto">
  <div class="w-5/6 mx-auto
  ">
  <Hero
      header="Where Innovation Meets Insight – Stay Ahead in Business & Technology"
      class="w-5/6
      "
      />
  <Categories/>
  <Articles/>
  </div>
  <Footer />
</div>
</template>
<script>
import Articles_list from "../../components/Articles_list.vue";
import Categories from "../../components/Categories.vue";
import Hero from "../../components/Hero.vue";
import Search from "../../components/Search.vue";
import Articles from "./articles/Articles.vue";
import Footer from "../../components/Footer.vue";
export default {
  name: "Home",
  components: {
    Hero,
    Search,
    Categories,
    Articles_list,
    Articles,
    Footer,
  },
};
</script>