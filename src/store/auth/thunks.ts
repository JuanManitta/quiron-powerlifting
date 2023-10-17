import { loginUserWithEmailAndPassword, logoutFirebase, registerUserWithEmailAndPassword } from "@/firebase/providers";
import { checkingCredentials, login, logout } from "."
import { LoginProps, RegisterProps } from "@/pages/auth/interfaces/auth-interfaces";
import { Dispatch } from "@reduxjs/toolkit";
import { clearUserData, savingUserData, setUserData } from "../user";
import { doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "@/firebase/config";


export const startCreatingUser = (userData: RegisterProps) => {

    const { email, fullName } = userData;

    return async( dispatch: Dispatch, ) => {
        
        dispatch( checkingCredentials() );
        dispatch( savingUserData() );


        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailAndPassword(userData)
        
        if( !ok ) return dispatch( logout({errorMessage}) )

        dispatch( login({ uid, email, displayName: fullName, photoURL}))
        
        const newUserData = {
            fullName: userData.fullName,
            email: userData.email,
            gym_name: userData.gym_name,
            foundation_date: userData.foundation_date,
            gold_medals: userData.gold_medals,
            silver_medals: userData.silver_medals,
            bronce_medals: userData.bronce_medals,
        }
        const newUserDataDoc = doc(FirebaseDB, `${ uid }/userData`)
        await setDoc( newUserDataDoc, newUserData );
        dispatch( setUserData( newUserData ) );
    }
}

export const startLoginUser = ( userData: LoginProps ) => {

    return async( dispatch: Dispatch ) => {

        dispatch(savingUserData());

        dispatch( checkingCredentials() );

        const { ok, uid, displayName, errorMessage, email, photoURL } = await loginUserWithEmailAndPassword(userData);

        if( !ok ) return dispatch(logout( { errorMessage } ));

        dispatch( login({ uid, email, displayName, photoURL }));

        dispatch( setUserData({
            fullName: displayName,
            gymName: 'Quirón Fuerza',
            foundation_date: new Date().toISOString(),
            gold_medals: 10,
            silver_medals: 10,
            bronce_medals: 10,
        }))

    }
}

export const startLogout = () => {
    return async(dispatch: Dispatch) => {

        await logoutFirebase();

        dispatch(logout({}));
        dispatch(clearUserData());
    }
}