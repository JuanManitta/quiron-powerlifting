import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Athlete } from "@/interfaces/athlete.interface";
import { ProfileForm } from "./ProfileForm";
import { HistoricForm } from "./HistoricForm";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";


export const ProfileAndHistoric = ({ activeAthlete }:{ activeAthlete: Athlete}) => {

  const { savingAthlete } = useSelector((state: RootState) => state.user);
  
  return (
    <Card className="p-6">
      { !savingAthlete ? <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="profile">Perfil</TabsTrigger>
          <TabsTrigger value="historic">Historial</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <div className="col-span-2 md:col-span-1  p-6">
            <h2 className="text-3xl font-bold">Perfil</h2>
            <Separator className="mb-6 mt-2"/>
            <ul className="grid gap-6 list-disc">
              <li> <b>Edad:</b> {activeAthlete.age}</li>
              <li> <b>Sentadilla:</b> {activeAthlete.squat}kg</li>
              <li> <b>Banco:</b> {activeAthlete.bench}kg</li>
              <li> <b>Despegue:</b> {activeAthlete.deadlift}kg</li>
              <li> <b>Total:</b> {activeAthlete.deadlift + activeAthlete.bench + activeAthlete.squat}kg</li>
              <li> Estado: { 
                <Badge
                  variant={ activeAthlete.isActive ? "destructive" : "secondary" }>
                  { activeAthlete.isActive ? "Activo" : "Inactivo" }
                </Badge>}
              </li>
            </ul>
            <Separator className="mb-6 mt-6"/>
            <div className="flex gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full">Editar</Button>
               </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                 <DialogHeader>
                   <DialogTitle className="mb-4">Editar atleta</DialogTitle>
                    <DialogDescription>
                      Completa los campos para editar los datos del atleta.
                    </DialogDescription>
                  </DialogHeader>
                    <ProfileForm/>
                </DialogContent>
            </Dialog>
              <Button className="w-full" variant='outline'>Eliminar</Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="historic">
          <div className="col-span-2 md:col-span-1  p-6">
            <h2 className="text-3xl font-bold">Historial</h2>
            <Separator className="mb-6 mt-2"/>
            <ul className="grid gap-4 list-disc">
              <li> Federación: {activeAthlete.federation}</li>
              <li> Ultima competencia: Sudamericano Perú  </li>
              <li> Proxima competencia: Nacional Argentina </li>
            </ul>
            <Separator className="mb-6 mt-6"/>
            <span className="text-xl font-bold">Medallas</span>
            <ul className="grid gap-4 mt-6 list-disc">
              <li> Oro: 2</li>
              <li> Plata: 2  </li>
              <li> Bronce: 1 </li>
              <li> Total: 5 </li>
            </ul>
            <Separator className="mb-6 mt-6"/>
            <div className="flex gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full">Editar</Button>
               </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                 <DialogHeader>
                   <DialogTitle className="mb-4">Editar atleta</DialogTitle>
                    <DialogDescription>
                      Completa los campos para editar los datos del atleta.
                    </DialogDescription>
                  </DialogHeader>
                    <HistoricForm/>
                </DialogContent>
            </Dialog>
              <Button className="w-full" variant='outline'>Eliminar</Button>
            </div>
          </div>
        </TabsContent>

      </Tabs> : null}
    </Card>
  )
}
