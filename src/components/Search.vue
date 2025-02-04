<template>
    <div class="search-container">
        <input
            type="text"
            v-model="searchQuery"
            placeholder="Search posts by title..."
            @input="onSearch"
            class="search-input"
        />

        <div v-if="isLoading" class="loading">Loading...</div>
        <div v-if="error" class="error">{{ error }}</div>

        <ul v-if="searchResults.length" class="results-list">
            <li v-for="post in searchResults" :key="post.id" class="result-item">
                <router-link :to="{ name: 'PostDetail', params: { id: post.id } }" class="result-link">
                    {{ post.title }}
                    {{ post.brief }}
                </router-link>
            </li>
        </ul>
        <div v-else class="no-results">No results found</div>
    </div>
</template>
<script>
import { ref } from 'vue';
import { searchPosts } from '../services/postService'; // Replace with your service

export default {
    setup() {
    const searchQuery = ref('');
    const searchResults = ref([]);
    const isLoading = ref(false);
    const error = ref(null);

    const onSearch = async () => {
      if (!searchQuery.value.trim()) {
        searchResults.value = [];
        return;
      }

      isLoading.value = true;
    error.value = null;

      try {
        searchResults.value = await searchPosts(searchQuery.value.trim());
      } catch (err) {
        error.value = 'Error fetching search results';
        console.error(err)
      } finally {
        isLoading.value = false;
      }
    };

    return {
        searchQuery,
        searchResults,
        isLoading,
        error,
        onSearch,
    };
  },
};
</script>



<style scoped>
.search-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.search-input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

.loading,
.error,
.no-results {
    text-align: center;
    margin-top: 20px;
    font-size: 16px;
    color: #666;
}

.results-list {
    list-style: none;
    padding: 0;
}

.result-item {
    margin-bottom: 10px;
}

.result-link {
    text-decoration: none;
    color: #007bff;
    font-size: 18px;
}

.result-link:hover {
    text-decoration: underline;
}
</style>