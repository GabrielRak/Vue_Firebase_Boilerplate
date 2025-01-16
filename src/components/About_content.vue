<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">About Us</h1>
    <p class="text-lg">
      {{ content }}
    </p>
    <RouterLink to="/articles">
        {{ encourage }} 
    </RouterLink>
  </div>
</template>
<script>
export default{
    name:"About_content",
    props:{
        content:{
            type:String,
            required:true
        },
        encourage:{
            type:String,
            required:true
        }
    },
}
</script>
