import { FirebaseDB } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore/lite";


export const loadUserData = async( uid = '') => {

    const userDataDoc = doc(FirebaseDB, `${ uid }/userData`);
    const userData = (await getDoc(userDataDoc)).data();
    
    const completeUserData = {

        uid,
        ...userData
    }

    return completeUserData;
}