import { defineStore } from "pinia";
import { db} from "../../firebase";
import {  setDoc, doc, collection } from "firebase/firestore";
export const useCommentsStore = defineStore("commentsStore", {
    state:() =>{
        return {
            comments: [],
            loading: false,
            error: null
        }
    },
    actions:{
        fetchComments(){
            try{
                const commentsRef = ref(db, "comments");
                this.loading = true;
                this.error = null;
                this.comments = [];
                commentsRef.onSnapshot((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        this.comments.push(doc.data());
                    });
                    this.loading = false;
                });
            }catch(error){
                this.error = error;
            }
        },

        async addComent(comment){
            try{
                const docRef = doc(collection(db, "comments"));
                await setDoc(docRef, comment);
                console.log(`Document written with ID: ${docRef.id}`);
            }catch(error)
            {

            }finally{

            }
        }
    }
})