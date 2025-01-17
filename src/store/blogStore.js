import { defineStore } from "pinia";
import { db } from "../firebase";
import { getDocs, getDoc, doc, collection } from "firebase/firestore";
export const useBlogStore = defineStore("blog", {
  state: () => {
    return {
      posts: [],
      post:[],
      error: "",
    };
  },
  actions: {
    async fetchPosts() {
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        querySnapshot.forEach((doc) => {
          this.posts.push(doc.data());
        }); 
      } catch (error) {
        console.error(error);
      }
    },
    async fetchPost(id) {
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const docRef = doc(db, "posts", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          this.post = { id: docSnap.id, ...docSnap.data() };
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error(error)
      }
    },
  },
});
