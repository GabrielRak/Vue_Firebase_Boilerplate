import { defineStore } from "pinia";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

export const useContactStore = defineStore("contact", {
  state: () => {
    return {
      error: "",
    };
  },

  actions: {
    async sendMessage(collectionName, data) {
      try {
        const docRef = await addDoc(collection(db, collectionName), data);
        this.error = "Thank you for your message";
        return docRef.id;
      } catch (e) {
        this.error = "Error occured";
        throw e;
      }
    },
  },
});
