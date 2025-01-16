<template>
  <div class="w-2/3 mx-auto">
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
</template>

<script>
export default {
  name: "Article_display",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
