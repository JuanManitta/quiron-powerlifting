import { loadUserData } from "@/helpers";
import { savingAthlete, savingUserData, setActiveAthlete, setAthletes, setUserData, setUserPhoto } from ".";
import { Dispatch } from "@reduxjs/toolkit";
import { collection, deleteDoc, doc, setDoc, getDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from "@/firebase/config";
import { loadAthletesData } from "@/helpers/loadAthletesData";
import { Athlete } from "@/interfaces/athlete.interface";
import { fileUpload } from "@/helpers/fileUpload";

export const startLoadingUserData = () => {

    return async( dispatch: Dispatch, getState: any ) => {

        dispatch(savingUserData());
        
        const { uid } = getState().auth;
        const userData = await loadUserData(uid);
        
        dispatch(setUserData(userData))
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

export const startAddingNewAthlete = ( athlete: any ) => {

    return async( dispatch: Dispatch, getState:any ) => {
        dispatch(savingAthlete());

        const { uid } = getState().auth;

        const newAthlete = doc(collection(FirebaseDB,`${uid}/athletes/data`));
        await setDoc(newAthlete, athlete);
        dispatch<any>(startLoadingAthletes())
    }
}

export const startDeletingAthlete = ( athleteId: string ) => {
    return async( dispatch: Dispatch, getState: any ) => {

        dispatch(savingAthlete());

        const { uid } = getState().auth;
        const athleteRef = doc(FirebaseDB, `${uid}/athletes/data/${athleteId}`);
        await deleteDoc(athleteRef);
        dispatch<any>(startLoadingAthletes());
    }
}

export const startEditingAthleteStatus = ( athlete: Athlete ) => {

    return async( dispatch: Dispatch, getState: any ) => {

        
        dispatch(savingAthlete());

        const { uid } = getState().auth;
        const athleteRef = doc(FirebaseDB, `${uid}/athletes/data/${athlete.id}`);
        const updatedAthlete = {
            ...athlete,
            isActive: !athlete.isActive
        }
        await setDoc(athleteRef, updatedAthlete);
        dispatch<any>(startLoadingAthletes());
    }

}

export const startGetingAthleteById = ( athleteId: string ) => {
    
        return async( dispatch: Dispatch, getState: any ) => {
    
            dispatch(savingAthlete());
    
            const { uid } = getState().auth;
            const athleteRef = doc(FirebaseDB, `${uid}/athletes/data/${athleteId}`);
            const athlete = await getDoc(athleteRef);

            const athleteData = athlete.data();            
            dispatch(setActiveAthlete(athleteData));
            
        }
}

export const startUploadingProfileImage = ( files: FileList ) => {
    return async ( dispatch: Dispatch, getState: any ) => {

        dispatch(savingUserData());

        const { uid } = getState().auth;
        const { userData } = getState().user;

        const userDataRef = doc(FirebaseDB, `${uid}/userData`);
        const photo = await fileUpload(files[0])

        const newUserData = {
            ...userData,
            photoUrl: photo
        }

        await setDoc( userDataRef, newUserData )
        dispatch(setUserPhoto( photo ))
        
        
    }
}