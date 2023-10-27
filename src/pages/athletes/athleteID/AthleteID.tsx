import Layout from "@/Layout";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { startGetingAthleteById } from "@/store/user";

import athleteBg from '@/assets/athlete-bg.webp';
import { RootState } from "@/store/store";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

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
        
        <section className="mt-3 grid gap-3 grid-cols-2 max-w-[1440px] mx-auto px-3 lg:px-0">
         
          <Card className="col-span-2 md:col-span-1  p-6">
            <h2 className="text-3xl font-bold">Perfil</h2>
            <Separator className="mb-6 mt-2"/>
            <ul className="grid gap-6">
              <li> Edad: ${activeAthlete.age}</li>
              <li> Sentadilla: {activeAthlete.squat}kg</li>
              <li> Banco: {activeAthlete.bench}kg</li>
              <li> Despegue: {activeAthlete.deadlift}kg</li>
              <li> Total: {activeAthlete.deadlift + activeAthlete.bench + activeAthlete.squat}kg</li>
            </ul>
            <Separator className="mb-6 mt-6"/>
            <ul className="grid gap-4">
              <li> Federación: {activeAthlete.federation}</li>
              <li> Ultima competencia: Sudamericano Perú  </li>
              <li> Proxima competencia: Nacional Argentina </li>
              <li> Estado: { 
                <Badge 
                  variant={ activeAthlete.isActive ? "destructive" : "secondary" }>
                  { activeAthlete.isActive ? "Activo" : "Inactivo" }
                </Badge>}
              </li>
            </ul>
          </Card>
          <Card className="col-span-2 md:col-span-1 h-[500px]">
            
          </Card>

        </section> 
        </> ) : ( <h1>Cargando</h1>) }
      </main>
    </Layout>
  )
}
