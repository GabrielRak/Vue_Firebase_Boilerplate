<template>
  <div
    class="table_of_contents"
  >
    <h3>Table of Contents</h3>
    <ul class="list-disc list-inside">
      <li v-for="paragraph in content" :key="paragraph.id" class="mb-2">
        <a
          :href="'#' + paragraph.title"
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
<style lang="css" scoped>

.table_of_contents {
  max-height: 80vh;
  overflow-y: auto;
  position: sticky;
  top:50%;
  box-shadow:4px 4px 8px rgba(0,0,0,0.1);
  background-color:rgba(255,255,255,0.9);
  border-radius: 15px;
  padding:10px;
  width:280px;

  h3{
    font-weight: 600;
    font-size:22px;
    margin-bottom:14px;
  }

  a{
    font-size: 16px;
    font-weight: 500;
    transition:all 0.3s ease;
    &:hover{
      text-decoration: underline;
    }
  }

}

</style>