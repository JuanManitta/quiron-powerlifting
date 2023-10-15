import { Navigate, Route, Routes } from 'react-router-dom'
import { Athletes, Competitions, Home, Workouts } from '.'
import { AthleteID } from './athletes/athleteID/AthleteID'

export const DashPowerRoutes = () => {

  return (
    <Routes>

        <Route path="home" element={<Home/>} />

        <Route path="competitions" element={<Competitions/>} />

        <Route path="athletes" element={<Athletes/>} />
        <Route path="athletes/:id" element={<AthleteID/>} />



        <Route path="workouts" element={<Workouts/>} />

        <Route path="/*" element={<Navigate to='/home'/>} />

    </Routes>
  )
}
