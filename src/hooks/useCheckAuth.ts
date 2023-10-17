import { FirebaseAuth } from "@/firebase/config";
import { login, logout } from "@/store/auth";
import { RootState } from "@/store/store";
import { clearUserData, startLoadingAthletes, startLoadingUserData } from "@/store/user";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useCheckAuth = () => {

    
  const dispatch = useDispatch();
  const { status } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
  
      onAuthStateChanged( FirebaseAuth, async( user ) => {
        if ( !user ) {
          dispatch(logout({})) 
          dispatch(clearUserData())
        } else {
          const { displayName, uid, email, photoURL } = user;
          dispatch( login({ displayName, uid, email, photoURL }) );
          dispatch<any>(startLoadingUserData());
          dispatch<any>( startLoadingAthletes())
        }
      });
    }
    ,[]);
    
    return status
}