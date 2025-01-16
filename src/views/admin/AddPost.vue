<template>
  <form @submit.prevent="submitForm" class="form-container">
    <div class="form-group">
      <label for="title">Title:</label>
      <input type="text" id="title" v-model="form.title" required />
    </div>
    <div class="form-group">
      <label for="brief">Brief:</label>
      <textarea id="brief" v-model="form.brief" required></textarea>
    </div>
    <div
      v-for="(chapter, index) in form.content"
      :key="index"
      class="form-group"
    >
      <label :for="'chapter-' + index">Chapter {{ index + 1 }}:</label>
      <input :id="'chapter-' + index" v-model="chapter.title" required />
      <label :for="'chapter-content-' + index">Content:</label>
      <textarea
        :id="'chapter-content-' + index"
        v-model="chapter.content"
        required
      ></textarea>
      <button type="button" @click="removeChapter(index)" class="remove-button">
        Remove Chapter
      </button>
    </div>
    <button type="button" @click="addChapter" class="add-button">
      Add Chapter
    </button>
    <button type="submit" class="submit-button">Submit</button>
  </form>
</template>
<script>
import { ref } from "vue";
import { useDashboardStore } from "../../store/dashboardStore";
export default {
  name: "AddPost",
  data() {

        const dashboardStore = useDashboardStore()

        const form = ref({
            title: "",
            brief: "",
            content: [{ title: "", content: "" }],
        });

        const addChapter = () => {
            form.value.content.push({ title: "", content: "" });
        };

        const removeChapter = (index) => {
            form.value.content.splice(index, 1);
        };

        const submitForm = () => {
            dashboardStore.addPost(form.value);
        };

        return {
            form,
            addChapter,
            removeChapter,
            submitForm,
        };
    
  },
};
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.add-button,
.remove-button,
.submit-button {
  display: inline-block;
  padding: 10px 15px;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

.add-button:hover,
.remove-button:hover,
.submit-button:hover {
  background-color: #0056b3;
}

.remove-button {
  background-color: #dc3545;
}

.remove-button:hover {
  background-color: #c82333;
}
</style>
