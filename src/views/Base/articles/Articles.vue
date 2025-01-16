<template>
    <div class="container mx-auto p-6">
        <h1 class="font-bold text-3xl text-center mb-6">Blog Posts</h1>
        <div v-if="error" class="text-red-500 text-center">{{ error }}</div>
        <div v-if="!error && posts.length === 0" class="text-center text-gray-500 mt-4">No posts available.</div>
        <div v-else>
            <Articles_list
                :posts="posts"
            />
        </div>
    </div>
</template>

<script>
import { defineComponent, onMounted, onUnmounted } from 'vue';
import { useBlogStore } from '../../../store/blogStore.js';
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
        });
        onUnmounted(() => {
            blogStore.posts = [];
        });

        return {
            posts: blogStore.posts,
            error: blogStore.error,
        };
    },
});
</script>
  
  