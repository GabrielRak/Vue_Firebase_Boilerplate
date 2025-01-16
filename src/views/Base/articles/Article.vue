<template>
  <div class="post-detail p-8 bg-white rounded-lg shadow-lg">
    <div v-if="loading" class="text-center text-gray-500">Loading...</div>
    <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
    <div v-else>
      <Table_of_contents :content="post.content" />
      <Article_display :post="post"/>
    </div>
  </div>
</template>

<script>
import { onMounted, computed, ref } from "vue";
import { useBlogStore } from "../../../store/blogStore.js";
import { useRoute } from "vue-router";
import Table_of_contents from "../../../components/Table_of_contents.vue";
import Article_display from "../../../components/Article_display.vue";
export default {
  name: "Article",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components:{
    Table_of_contents,
    Article_display
  },

  setup() {
    const blogStore = useBlogStore();
    const route = useRoute();
    const loading = ref(false);
    const error = ref(null);

    const fetchPost = async () => {
      loading.value = true;
      error.value = null;
      try {
        await blogStore.fetchPost(route.params.id);
      } catch (err) {
        error.value = "Failed to fetch post.";
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchPost();
    });

    const post = computed(() => blogStore.post);
      blogStore.post = {
        id: null,
        title: null,
        content: null,
      };
      blogStore.post.title = null;
      blogStore.post.content = null;

    return {
      post,
      loading,
      error,
    };
  },
};
</script>
