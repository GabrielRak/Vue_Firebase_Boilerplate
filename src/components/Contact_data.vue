<template>
  <div>
    <h1 class="text-4xl font-bold">Let's talk</h1>
    <p>
      Have some big idea or brand to develop and need help? Then reach out we'd
      love to hear about your project and provide help
    </p>
    <h3 class="text-xl font-bold">Email</h3>
    <span>{{ email }}</span>
    <h3 class="text-xl font-bold">Socials</h3>
    <div class="socials flex flex-col">
      <RouterLink to="/">
        <span class="underline">X</span>
      </RouterLink>
      <RouterLink to="/">
        <span class="underline">Instagram</span>
      </RouterLink>
    </div>
  </div>
</template>
<script>
import { RouterLink } from 'vue-router';

export default{
    name:"Contact_data",
    components:{
        RouterLink
    },
    props:{
        email:{
            type:String,
            required:true
        },
    }
}

</script>