import { App } from "@/App";
import { DashPowerRoutes } from "@/pages/DashPowerRoutes";
import { AuthRoutes } from "@/pages/auth/routes/AuthRoutes";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";


export const AppRouter = () => {
  const diaspatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      console.log('hay user');
      diaspatch({type: 'auth/login', payload: JSON.parse(user)});

    } else {
      console.log('no hay user');
    }
  }
  ,[]);

  const { status } = useSelector((state: RootState) => state.auth);

  
  return (
    <Routes>

      {
        (status === 'authenticated')
        ? <Route path="/*" element={<DashPowerRoutes/>} />
        : <Route path="/auth/*" element={<AuthRoutes/>}/>
      }
      
      <Route path="/" element={<App/>} />
      <Route path='/*' element={<Navigate to='/auth/login'/>} />

    </Routes>
  )
}
