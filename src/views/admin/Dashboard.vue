<template>
  <h1 class="text-center text-3xl font-semibold font-poppins mt-14 mb-12">
    Admin dashboard
  </h1>

  <div class="flex">
    <div class="w-1/4 bg-gray-200 p-4">
      <ul>
        <li class="mb-4">
            <button class="w-full bg-blue-500 text-white py-2" @click="changeView('users')">Users</button>
        </li>
        <li class="mb-4">
            <button class="w-full bg-blue-500 text-white py-2" @click="changeView('articles')">Managing Post</button>
        </li>
        <li class="mb-4">
            <button class="w-full bg-blue-500 text-white py-2" @click="changeView('newsletter')">Newsletter</button>
        </li>
        <li>
            <button class="w-full bg-blue-500 text-white py-2" @click="changeView('addPost')">Add New Post</button>
        </li>
      </ul>
    </div>

    <div v-if="view === 'articles'" class="w-3/4">
      <Articles_list :posts="articles" :isAdmin="true" @delete-post="delete_post" :categories="['a','b']"/>
    </div>
    <div v-if="view === 'addPost'" class="w-3/4">
      <AddPost/>
    </div>
  </div>
  <div v-if="view === 'users'">
    <Users_list/>
  </div>
  <div v-if="view === 'newsletter'">
    <Newsletter_form />
  </div>

</template>
<script>
import { computed, onMounted } from "vue";
import Articles_list from "../../components/Articles_list.vue";
import { useBlogStore } from "../../store/blog/blogStore";
import { useDashboardStore } from "../../store/admin/dashboardStore";
import Newsletter_form from "../../components/admin/Newsletter_form.vue";
import { ref } from "vue";
import AddPost from "../../components/admin/AddPost.vue";
import Users_list from "../../components/admin/Users_list.vue";
export default {
  name: "Dashboard",
  setup() {
    const blogStore = useBlogStore();
    const dashboardStore = useDashboardStore();

    onMounted(() => {
      blogStore.fetchPosts();
      blogStore.fetchCategories();
    });

    const delete_post = (id) => {
      dashboardStore.removePost(id);
    };


    const categories = computed(() => blogStore.categories);
    const articles = computed(() => blogStore.posts);

    const view = ref("articles");
    const changeView = (newView) => {
      view.value = newView;
    }

    return {
      changeView,
      view,
      articles,
      categories,
      delete_post,
    };
  },
  components: {
    Articles_list,
    Newsletter_form,
    AddPost,
    Users_list
  },
};
</script>
