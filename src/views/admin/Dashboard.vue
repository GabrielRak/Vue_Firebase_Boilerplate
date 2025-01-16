<template>

    <h1>Admin dashboard</h1>
    <Articles_list
        :posts="articles" :isAdmin="true"
        @delete-post="delete_post"
        />
    
    <RouterLink to="/admin/add-post">
    <button class="bg-green-600 text-white text-3xl">

        Add Post
    </button>
    </RouterLink>

</template>
<script>
import { onMounted } from 'vue';
import Articles_list from '../../components/Articles_list.vue';
import { useBlogStore } from '../../store/blogStore';
import { useDashboardStore } from '../../store/dashboardStore';
export default{
    name:"Dashboard",

    setup(){
        
        const blogStore = useBlogStore();
        const dashboardStore = useDashboardStore();

        onMounted( ()=> {
            blogStore.fetchPosts();
        })

        const delete_post = (id) =>{
            dashboardStore.removePost(id)
        }


        return {
            articles: blogStore.posts,
            delete_post,
            edit_post
        }

    },
    components:{
        Articles_list,
    }
}
</script>