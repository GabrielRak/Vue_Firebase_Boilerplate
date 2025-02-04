import { defineStore } from "pinia";
import { db } from "../../firebase";
import { getDocs, getDoc, doc, collection } from "firebase/firestore";
export const useBlogStore = defineStore("blog", {
  state: () => {
    return {
      postaa:[],
      posts: [],
      post:[],
      error: "",
      categories:[],
    };
  },
  actions: {
    async fetchPosts(category = null) {
      try {
        let query;
        if (category) {
          query = query(collection(db, "posts"), where("category", "==", category));
        } else {
          query = collection(db, "posts");
        }
        const querySnapshot = await getDocs(query);
        this.posts = [];
        querySnapshot.forEach((doc) => {
          this.posts.push(doc.data());
        }); 
      } catch (error) {
        console.error(error);
      }
    },
    async fetchPost(id) {
      try {
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
    async fetchCategories(){
      try {
        this.categories = []; 
        const querySnapshot = await getDocs(collection(db, "categories"));
        querySnapshot.forEach((doc) => {
          this.categories.push(doc.data().title);
        }); 
      } catch (error) {
        console.error(error);
      }
    },
    clearCategories(){
      this.categories = [];
    }
  },
});
