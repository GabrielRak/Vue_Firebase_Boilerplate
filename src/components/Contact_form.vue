<template>
  <div>
    <div>
      <div class="w-1/2">
        <form @submit.prevent="submitForm">
          <StyledInput
            id="name"
            label="Name:"
            type="text"
            v-model="name"
            placeholder="Name*"
            />
          <StyledInput
            id="email"
            label="Email:"
            type="email"
            v-model="email"
            placeholder="Email*"
          />
          <div class="form-group">
            <label for="message" class="font-sm font-light">Message:</label>
            <textarea
              id="message"
              v-model="message"
              class="bg-primary p-2 mb-6"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="bg-black py-2 text-white w-full hover:opacity-75"
          >
            Submit
          </button>
        </form>
        <p v-if="error">{{ error }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { useContactStore } from "../store/admin/contactStore";
import { ref, computed } from "vue";
import StyledInput from "./common/StyledInput.vue";
export default {
  name: "Contact_form",
  components: {
    StyledInput,
  },
  props: {
    error: {
      type: String,
      required: false,
    },
  },
  setup() {
    const contactStore = useContactStore();
    const name = ref("");
    const email = ref("");
    const message = ref("");
    const error = computed(() => contactStore.error);

    const submitForm = async () => {
      try {
        await contactStore.sendMessage("contact_messages", {
          name: name.value,
          email: email.value,
          message: message.value,
          createdAt: new Date(),
        });
      } catch (error) {}
    };

    return { name, email, message, error, submitForm };
  },
};
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
