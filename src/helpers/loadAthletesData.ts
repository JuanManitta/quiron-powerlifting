import { FirebaseDB } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore/lite";



export const loadAthletesData = async( uid = '') => {
    
    const athletesCollectionRef = collection(FirebaseDB, `${ uid }/athletes/data`);
    const docs = await getDocs(athletesCollectionRef);

    const athletes: any[] = [];
    docs.forEach(doc => {
        athletes.push({id: doc.id, ...doc.data()});
    });
    
    return athletes;
}