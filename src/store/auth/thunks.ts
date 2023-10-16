import { loginUserWithEmailAndPassword, logoutFirebase, registerUserWithEmailAndPassword } from "@/firebase/providers";
import { checkingCredentials, login, logout } from "."
import { LoginProps, RegisterProps } from "@/pages/auth/interfaces/auth-interfaces";
import { Dispatch } from "@reduxjs/toolkit";


export const startCreatingUser = (userData: RegisterProps) => {

    const { email, fullName } = userData

    return async( dispatch: Dispatch ) => {
        
        dispatch( checkingCredentials() );

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailAndPassword(userData)
        if( !ok ) return dispatch( logout({errorMessage}) )
        dispatch( login({ uid, email, displayName: fullName, photoURL}))
    
    }
}

export const startLoginUser = ( userData: LoginProps ) => {

    return async( dispatch: Dispatch ) => {

        dispatch( checkingCredentials() );

        const { ok, uid, displayName, errorMessage, email, photoURL } = await loginUserWithEmailAndPassword(userData);

        if( !ok ) return dispatch(logout( { errorMessage } ))

        dispatch(login({ uid, email, displayName, photoURL }))

    }
}

export const startLogout = () => {
    return async(dispatch: Dispatch) => {

        await logoutFirebase();

        dispatch(logout({}))
    }
}