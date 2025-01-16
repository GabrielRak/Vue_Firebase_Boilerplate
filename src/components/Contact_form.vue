<template>
    <div>
        <div>
        <div class="w-1/2">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name" class="font-sm font-light">Name:</label>
            <input type="text" id="name" v-model="name" class="bg-primary p-2 mb-6" required />
          </div>
          <div class="form-group">
            <label for="email" class="font-sm font-light">Email:</label>
            <input type="email" id="email" v-model="email" class="bg-primary p-2 mb-6" required />
          </div>
          <div class="form-group">
            <label for="message" class="font-sm font-light">Message:</label>
            <textarea id="message" v-model="message" class="bg-primary p-2 mb-6" required></textarea>
          </div>
          <button type="submit" class="bg-black py-2 text-white w-full hover:opacity-75">Submit</button>
        </form>
        <p v-if="error">{{ error }}</p>
      </div>
    </div>
    </div>
</template>
<script>
import {useContactStore} from '../store/contactStore';
import { ref, computed } from 'vue';
export default{
    name:'Contact_form',
    props:{
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        message:{
            type:String,
            required:true
        },
        error:{
            type:String,
            required:true
        }
    },
    setup()
    {
        const contactStore = useContactStore();
    const name = ref("");
    const email = ref("");
    const message = ref("");

    const error = computed(() => contactStore.error);

    const submitForm = async () => {
      const data = {
        name: name.value,
        email: email.value,
        message: message.value,
        createdAt: new Date(),
      };

      try {
        await contactStore.sendMessage("contact_messages", data);
      } catch (error) {}
    };

    return { name, email, message, error, submitForm };
    }
}

</script>

<style scoped>

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}


</style>