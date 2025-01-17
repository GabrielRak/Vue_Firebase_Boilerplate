<template>
  <div>
    <div class="space-y-4 mt-4 w-5/12 mx-auto">
      <div
        v-for="post in posts"
        :key="post.id"
        class="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 bg-white"
      >
        <router-link
          :to="{ name: 'PostDetail', params: { id: post.id } }"
          class="text-black hover:underline"
        >
          <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
        </router-link>
        <p class="text-gray-700">{{ post.brief }}</p>
        <div class="text-center w-100" v-if="isAdmin">
          <div class="flex justify-center">
            <button
              @click="$emit('delete-post', post.id)"
              class="bg-red-700 text-white px-8 py-2"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Articles_list",
  props: {
    posts: {
      type: Array,
      required: true,
    },
    isAdmin: {
      type: Boolean,
    },
  },
  methods: {
    deletePost(id) {
      this.$emit("delete-post", id);
    },
  },
};
</script>
