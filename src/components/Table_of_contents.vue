<template>
  <div
    class="table_of_contents mb-8 sticky top-1/2 w-64 left-0 transform -translate-y-1/2 shadow-lg p-4 bg-white rounded-lg"
  >
    <h3 class="text-xl font-semibold mb-4">Table of Contents</h3>
    <ul class="list-disc list-inside">
      <li v-for="paragraph in content" :key="paragraph.id" class="mb-2">
        <a
          :href="'#' + paragraph.title"
          class="text-blue-500 hover:underline"
          >{{ paragraph.title }}</a
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Table_of_contents",
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
};
</script>
