<template>
  <div class="contact">
    <div class="flex">
    <div class="w-1/2">
      <Contact_data email="yourbusiness@yourdomain.com"/>
    </div>
    <div>
      <Contact_form/>
    </div>  
  </div>
  </div>
</template>

<script>
import Contact_data from "../../components/Contact_data.vue";
import Contact_form from "../../components/Contact_form.vue";
export default {
  name:'Contact',
  components:{
    Contact_form,
    Contact_data
  },
};
</script>

<style>
.contact {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
</style>
