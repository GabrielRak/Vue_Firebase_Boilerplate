<template>
    <div class="flex">

        <div v-for="category in categories" id="container" class="flex">
            <button>{{ category }}</button>
        </div>
    </div>
</template>
<script>
import { onBeforeMount, onBeforeUnmount } from "vue";
import { useBlogStore } from "../store/blog/blogStore";

export default {
  name: "Categories",
  setup() {
    const blogStore = useBlogStore();

    onBeforeMount(() => {
      blogStore.fetchCategories();
    });

    onBeforeUnmount(() => {
      blogStore.clearCategories();
    });

    const categories = blogStore.categories;

    return {
      categories,
    };
  },
};
</script><style lang="scss" scoped>
#container {

  margin-top:3vh;

  button {
    border-radius: 100px;
    padding: 5px 10px;
    border: 3px solid black;
    font-size: 17px;
    transition:all 0.4s ease;
    &:hover {
        background-color:rgba(255,0,0,0.04);
        border-color:rgba(0,0,0,0.8 );
    }
  }
}
</style>
