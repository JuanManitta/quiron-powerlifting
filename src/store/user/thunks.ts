import { loadUserData } from "@/helpers";
import { savingAthlete, savingUserData, setAthletes, setUserData } from ".";
import { Dispatch } from "@reduxjs/toolkit";
import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "@/firebase/config";
import { loadAthletesData } from "@/helpers/loadAthletesData";

export const startLoadingUserData = () => {

    return async( dispatch: Dispatch, getState: any ) => {

        dispatch(savingUserData());
        
        const { uid } = getState().auth;
        const userData = await loadUserData(uid);
        
        dispatch(setUserData(userData))
    }
}

export const startAddingNewAthlete = ( athlete: any ) => {

    return async( dispatch: Dispatch, getState:any ) => {
        dispatch(savingAthlete());

        const { uid } = getState().auth;

        const newAthlete = doc(collection(FirebaseDB,`${uid}/athletes/data`));
        await setDoc(newAthlete, athlete);
        dispatch<any>(startLoadingAthletes())
    }
}

export const startLoadingAthletes = () => {
    return async( dispatch: Dispatch, getState:any ) => {
        dispatch(savingAthlete());

        const { uid } = getState().auth;
        const athletes = await loadAthletesData(uid);
        
        dispatch(setAthletes(athletes));        
    }
}