<template>
    <div class="container">
        <div v-if="error" class="text-red-500 text-center">{{ error }}</div>
        <div v-if="!error && posts.length === 0" class="text-center text-gray-500 mt-4">No posts available.</div>
        <div v-else>
            <Articles_list
                :posts="posts"
                :categories="categories"
                />
        </div>
    </div>
</template>

<script>
import { computed, defineComponent, onMounted, onUnmounted } from 'vue';
import { useBlogStore } from '../../../store/blog/blogStore.js';
import Articles_list from '../../../components/Articles_list.vue';
export default defineComponent({
    name: 'Blog',
    components:{
        Articles_list
    },
    setup() {
        const blogStore = useBlogStore();
        
        onMounted(() => {
            blogStore.fetchPosts();
            blogStore.fetchCategories();
        });
        onUnmounted(() => {
            blogStore.posts = [];
        });

        return {
            categories: computed(()=> blogStore.categories),
            posts: computed(()=>blogStore.posts),
            error: blogStore.error,
        };
    },
});
</script>
  
  