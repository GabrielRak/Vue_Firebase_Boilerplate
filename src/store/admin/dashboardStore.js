import { defineStore } from "pinia";
import { collection, setDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { v4 as uuidv4 } from "uuid";
import emailjs from "emailjs-com";

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
        if (confirm("Are you sure you want to delete this post?")) {
          deleteDoc(doc(db, "posts", postId));
        } else {
          console.log("Post deletion canceled");
        }
      } catch (error) {
        console.error(error);
      }
    },

    editPost(post) {
      try {
        const docRef = doc(db, "posts", post.id);
        setDoc(docRef, post);
        console.log("Succesfully edtied post");
      } catch (error) {
        console.error(error);
      }
    },

    async send_NewsletterMail(email) {
      try {
        const response = await emailjs.send(
          "your_serivce_id", // Your service id
          "you_template_id", //Your template id
          {
            name: email.name,
            email: email.email,
            message: email.message,
          },
          "your_public_key" // Your public key
        );
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
