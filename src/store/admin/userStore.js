import { defineStore } from "pinia";
import { db } from "../../firebase";
import { getDocs,collection ,updateDoc, doc} from "firebase/firestore";
export const useUserStore = defineStore("userStore", {
  state: () => ({
    users: [],
    error: "",
  }),
  actions: {
    async fetchUsers() {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          this.users.push(doc.data());
        });
      } catch (error) {
        console.error(error);
      }
    },
    async promoteUser(id) {
      try {
        const userRef = doc(db, "users", id);
        await updateDoc(userRef, {
          role: "admin",
        });
        console.log("Congratulations")
      } catch (error) {
        console.error(error);
      }
    },
    async degradeUser(id) {
      try{
        const userRef = doc(db, "users", id);
        await updateDoc(userRef, {
          role: "user",
        });
        console.log("User has been degraded")
      }catch(error){
        console.error(error);
      }
    }
  },
});
