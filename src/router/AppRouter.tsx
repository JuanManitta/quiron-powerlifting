import { App } from "@/App";
import { useCheckAuth } from "@/hooks/useCheckAuth";
import { DashPowerRoutes } from "@/pages/DashPowerRoutes";
import { AuthRoutes } from "@/pages/auth/routes/AuthRoutes";
import { Navigate, Route, Routes } from "react-router-dom";


export const AppRouter = () => {

  const status  = useCheckAuth();

  
  return (
    <Routes>

      {
        (status === 'authenticated')
        ? <Route path="/*" element={<DashPowerRoutes/>} />
        : <Route path="/auth/*" element={<AuthRoutes/>}/>
      }
      
      {
        (status === 'authenticated' || status === 'not-authenticated')
        ? null
        : <Route path="/" element={<App/>} />
      }
      <Route path='/*' element={<Navigate to='/auth/login'/>} />

    </Routes>
  )
}
