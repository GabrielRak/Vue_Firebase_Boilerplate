import { defineStore } from "pinia";
import { collection, setDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import { v4 as uuidv4 } from "uuid";
export const useDashboardStore = defineStore("dashboard", {
  actions: {
    async addPost(post) {
      try {
        const customId = uuidv4();
        const docRef = doc(collection(db, "posts"), customId);
        await setDoc(docRef, { ...post, id: customId });
        console.log(`Document written with ID: ${docRef.id}`);
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    },

    removePost(postId) {
      try {
        deleteDoc(doc(db, "posts", postId));
      } catch (error) {
        console.error(error);
      }
    },
  },
  getters: {
    getPostById: (state) => (postId) => {
      return state.posts.find((post) => post.id === postId);
    },
  },
});
