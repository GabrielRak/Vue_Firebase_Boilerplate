<template>
  <div>
    <h1>{{ header }}</h1>
  </div>
</template>
<script>
import Search from "./Search.vue";

export default {
  name: "Hero",
  components: {
    Search,
  },
  props: {
    header: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
h1 {
  margin-top:11vh;
  font-size: 33px;
  font-weight: 700;
  font-family:'poppins';
}
</style>
