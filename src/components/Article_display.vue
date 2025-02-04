<template>
  <div>
    <div v-if="!editMode">
      <div class="article">
        <img src="../assets/images/Hero.webp" alt="" />
        <h1>{{ post.title }}</h1>
        <div
          v-for="paragraph in post.content"
          :key="paragraph.id"
          :id="paragraph.title"
        >
          <h2>{{ paragraph.title }}</h2>
          <p>{{ paragraph.content }}</p>
        </div>
      </div>
    </div>
    <!-- <div v-if="editMode">
      <form @submit.prevent="editPost">
        <input type="text" v-model="post.title" />
        <textarea name="brief" v-model="post.brief"></textarea>
        <div
          v-for="paragraph in post.content"
          :key="paragraph.id"
          :id="paragraph.title"
        >
          <input type="text" v-model="paragraph.title" />
          <textarea v-model="paragraph.content"></textarea>
        </div>
        <button type="submit">Save changes</button>
      </form>
    </div> -->
    <!-- <div v-if="isAuthenticated">
      <div>
        <h3>Add a Comment</h3>
        <form @submit.prevent="addComment">
          <textarea
            v-model="newComment"
            placeholder="Write your comment here..."
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    <div v-if="!isAuthenticated">
      <h2>YOU MUST BE SIGNED IN TO ADD A COMMENT</h2>
    </div> -->
  </div>
</template>

<script>
import { useAuthStore } from "../store/auth/authStore";
import { useDashboardStore } from "../store/admin/dashboardStore";
import { useCommentsStore } from "../store/blog/commentsStore";
import { onBeforeMount } from "vue";
export default {
  name: "Article_display",
  props: {
    post: {
      type: Object,
      required: true,
    },
    isAuthenticated: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    const authstore = useAuthStore();
    const commentsStore = useCommentsStore();
    const editMode = authstore.authenticated;

    onBeforeMount(() => {
      commentsStore.fetchComments();
    });

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

    addComment() {
      commentsStore.addComment(this.newComment);
    },
  },
};
</script>
<style lang="scss" scoped>

.article{

  width: 70vw;
  margin:auto;

  img{
    margin:auto;
    width: 50vw;
    height:40vh;
  }

  h1{
    text-align: center;
    font-weight: 500;
    font-size:31px;
    margin:30px 0px;
  }

  h2{
    font-size: 25px;
    font-weight: 600;
    margin:20px 0px;
  }
  
  p{
    font-size: 18px;
    font-weight: 400;
    margin:10px 0px;
  }

}

</style>
