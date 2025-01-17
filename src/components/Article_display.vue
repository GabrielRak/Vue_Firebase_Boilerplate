<template>
  <div class="w-2/3 mx-auto">
    <div v-if="!editMode">
      <h1 class="text-4xl text-center font-bold mb-32">{{ post.title }}</h1>
      <div
        v-for="paragraph in post.content"
        :key="paragraph.id"
        :id="paragraph.title"
        class="mb-24"
      >
        <h2 class="text-2xl font-bold text-center">{{ paragraph.title }}</h2>
        <p class="mt-2 text-gray-700">{{ paragraph.content }}</p>
      </div>
    </div>
    <div v-if="editMode">
      <form @submit.prevent="editPost">
        <input
          type="text"
          v-model="post.title"
          class="w-full text-4xl font-bold text-center"
        />
        <textarea name="brief" v-model="post.brief"></textarea>
        <div
          v-for="paragraph in post.content"
          :key="paragraph.id"
          :id="paragraph.title"
          class="mb-24"
        >
          <input
            type="text"
            v-model="paragraph.title"
            class="w-full text-2xl font-bold text-center"
          />
          <textarea
            class="mt-2 text-gray-700 w-full h-64"
            v-model="paragraph.content"
          ></textarea>
        </div>
        <button type="submit" class="text-xl bg-black text-white">
          Save changes
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "../store/authStore";
import { useDashboardStore } from "../store/dashboardStore";
import { ref } from "vue";
export default {
  name: "Article_display",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    const authstore = useAuthStore();
    const editMode = authstore.authenticated;

    return {
      editMode,
    };
  },
  methods: {
    editPost() {
      const dashboardStore = useDashboardStore();
      const updatedPost = {
        id: this.post.id,
        title: this.post.title,
        brief: this.post.brief,
        content: this.post.content.map((paragraph) => ({
          title: paragraph.title,
          content: paragraph.content,
        })),
      };
      dashboardStore.editPost(updatedPost);
    },
  },
};
</script>
