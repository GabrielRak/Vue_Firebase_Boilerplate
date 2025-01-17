<template>
  <h1 class="text-center text-3xl font-semibold font-poppins mt-14 mb-12">
    Admin dashboard
  </h1>
  <Articles_list :posts="articles" :isAdmin="true" @delete-post="delete_post" />

  <RouterLink to="/admin/add-post">
    <div class="text-center w-screen my-8">
      <button class="bg-green-600 text-white text-3xl w-100">Add Post</button>
    </div>
  </RouterLink>

  <h2 class="text-xl font-semibold font-poppins text-center">
    Send newsletter to your subscribers
  </h2>

  <Newsletter_form />
</template>
<script>
import { onMounted } from "vue";
import Articles_list from "../../components/Articles_list.vue";
import { useBlogStore } from "../../store/blogStore";
import { useDashboardStore } from "../../store/dashboardStore";
import Newsletter_form from "../../components/Newsletter_form.vue";
export default {
  name: "Dashboard",
  setup() {
    const blogStore = useBlogStore();
    const dashboardStore = useDashboardStore();

    onMounted(() => {
      blogStore.fetchPosts();
    });

    const delete_post = (id) => {
      dashboardStore.removePost(id);
    };

    return {
      articles: blogStore.posts,
      delete_post,
    };
  },
  components: {
    Articles_list,
    Newsletter_form,
  },
};
</script>
