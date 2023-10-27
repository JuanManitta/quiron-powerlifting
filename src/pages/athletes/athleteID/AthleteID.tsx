import Layout from "@/Layout";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { startGetingAthleteById } from "@/store/user";

import athleteBg from '@/assets/athlete-bg.webp';
import { RootState } from "@/store/store";
import ClipLoader from "react-spinners/ClipLoader";
import { Profile } from "./components/Profile";
import { Competitions } from "./components/Competitions";

export const AthleteID = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const { activeAthlete, savingAthlete } = useSelector((state: RootState) => state.user);
  
  
  useEffect(() => {
    dispatch<any>(startGetingAthleteById(id!));
  },[]);



  return (
    <Layout>
      <main className="p-0 max-w-full relative">
        { !savingAthlete && activeAthlete !== null ? ( 
        <> <section>
          <div style={{ position: 'relative' }}>
            <div className="opacity-5">
              <img
                className="w-full h-[300px] md:h-[400px] object-cover" 
                src={athleteBg} 
                alt=""
              />
            </div>
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-5xl font-bold">
              {activeAthlete?.fullName}
            </h1>
          </div>
        </section>
        
        <section className="mt-3 grid gap-3 grid-cols-2 max-w-[1440px] mx-auto px-3">
         
         <div className="col-span-2 md:col-span-1">
          <Profile activeAthlete={activeAthlete}/>
        </div>

        <div className="col-span-2 md:col-span-1">
          <Competitions/>
        </div>

        </section> 
        </> ) : ( 
        <div className="min-h-[900px] flex justify-center items-center">
          <ClipLoader size={140} color="#36d7b7"/>
        </div>) }
      </main>
    </Layout>
  )
}
