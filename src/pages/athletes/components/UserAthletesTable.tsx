import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"

import ClipLoader from "react-spinners/ClipLoader"

import { Athlete } from "@/interfaces/athlete.interface"
import { DataTable } from "./DataTable"
import { columns } from "./Columns"


export const UserAthletesTable = () => {

  const { athletes } = useSelector((state: RootState) => state.user);
  const [athleteWithTotal, setAthleteWithTotal] = useState<Athlete[]>(athletes);
  const { savingAthlete } = useSelector((state: RootState) => state.user);


  useEffect(() => {
    const updatedAthletes = athletes.map((athlete) => {
      return {
        ...athlete,
        total: athlete.squat + athlete.deadlift + athlete.bench
      }
    });
    setAthleteWithTotal(updatedAthletes);
  }, [athletes]);
  

  return (
    <>
    {!savingAthlete ? (
    <div>
      <DataTable columns={columns} data={athleteWithTotal} />
    </div> ) : (
    <div className="p-6 flex justify-center items-center h-[400px] border rounded-md">
      <ClipLoader color="#36d7b7" size='130px'/>
    </div> )}
    </>
  )
}


