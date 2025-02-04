<template>
  <div>
    <div class="w-full grid grid-cols-3 gap-x-8 mx-auto">
      <div
        v-for="post in posts"
        :key="post.id"
        class="article_container"
      >
        <router-link
          :to="{ name: 'PostDetail', params: { id: post.id } }"
        >

      <div class="image-container">

        <img src="../assets/images/Hero.webp" alt="" />
      </div>

        <div class="flex">
          <span>{{ post.category }}</span>
        </div>

          <h2 >{{ post.title }}</h2>
          <p >{{ post.brief }}</p>
          
          
          
          <div v-if="isAdmin">
            <div>
              <button
              @click="$emit('delete-post', post.id)"
              >
              Delete
            </button>
          </div>
        
        
        </div>
      </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "Articles_list",
  props: {
    posts: {
      type: Array,
      required: true,
    },
    categories:{
      type: Array,
      required: true
    },
    isAdmin: {
      type: Boolean,
    },
  },
  setup(props, { emit }) {
    const { posts, isAdmin,categories } = toRefs(props);


    const deletePost = (id) => {
      emit("delete-post", id);
    };

    return {
      posts,
      isAdmin,
      categories,
      deletePost,
    };
  },
});
</script>
<style scoped lang="scss">

.article_container{

  margin-top:8vh;

  background-color:#f0f0f0;
  border-radius:15px;
  padding:10px 30px;

  .image-container {
    display: inline-block; /* Maintains space */
    overflow: hidden; /* Prevents overflow */
  }

  .image-container img {
    transition: transform 0.3s ease; /* Smooth transition */
  }

  .image-container:hover img {
    transform: scale(1.2); /* Zoom 20% */
  }


  span{
    font-size:16px;
    font-weight: 600;
    font-family:'poppins';
    display:flex;
    align-items: center;
    text-transform: capitalize;
    margin-top:20px;  

    &::after{
      margin:0px 8px;
      content: "";
      display: block;
      width:4px;
      height: 4px;
      background-color: black;
      border-radius: 100%;
    }
  }

  h2{
    font-size:24px;
    font-weight:600;
    font-family:'poppins';
    margin:15px 0px;
  }

  p{
    font-size:16px;
    font-weight:400;
    font-family:'poppins';
  }

}

</style>