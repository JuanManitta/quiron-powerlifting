
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";
import { LoginProps, RegisterProps } from "@/pages/auth/interfaces/auth-interfaces";

export const registerUserWithEmailAndPassword = async ( userData: RegisterProps) => {

    const { fullName, email, password, gym_name } = userData;
    
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;

        await updateProfile( FirebaseAuth.currentUser!, { displayName: fullName })

        return {
            ok: true,
            uid, photoURL, email, fullName, gym_name
        }
        
    }
    catch (error: any) {
        

        return {
            ok: false,
            errorMessage: 'El correo ya esta en uso'
        };
    }
}

export const loginUserWithEmailAndPassword = async ( userData: LoginProps ) => {

    const { email, password } = userData;

    try {
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        console.log(resp);
        
        const { uid, photoURL, displayName   } = resp.user;
        return {
            ok: true,
            uid, photoURL, displayName, email

        }
    } catch (error: any) {

        
        
         return {
            ok: false,
            errorMessage: 'Usuario o contraseña incorrectos'
         }   
    }
}


export const logoutFirebase = async () => {

    return await FirebaseAuth.signOut();
}
