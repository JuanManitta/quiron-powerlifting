import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LastCompForm } from "./LastCompForm";
import { NextCompForm } from "./NextCompForm";


export const Competitions = () => {
  return (
    <Card className="p-6">
      <Tabs defaultValue="next_comp" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="last_comp">Ultima competencia</TabsTrigger>
          <TabsTrigger value="next_comp">Proxima competencia</TabsTrigger>
        </TabsList>

        <TabsContent value="last_comp">
          <div className="col-span-2 md:col-span-1 p-6">
            <h2 className="text-3xl font-bold">General</h2>
            <Separator className="mb-6 mt-2"/>
            <ul className="grid gap-6 list-disc">
              <li> <b>Fecha:</b> 20/10/1998</li>
              <li> <b>Lugar:</b> La concha de tu hermana </li>
              <li> <b>Federación:</b> Falopa </li>
              <li> <b>Otra info:</b>  </li>
            </ul>
            <h2 className="text-3xl font-bold mb-6 mt-6">Rendimiento</h2>
            <Separator className="mb-6 mt-2"/>
            <ul className="grid gap-6 list-disc">
              <li> <b>Sentadilla:</b> 200kg</li>
              <li> <b>Banco:</b> 100kg</li>
              <li> <b>Despegue:</b> 300kg</li>
              <li> <b>Total:</b> 600kg</li>
            </ul>
            <Separator className="mb-6 mt-6"/>
            <div>
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
                    <LastCompForm/>
                </DialogContent>
            </Dialog>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="next_comp">
          <div className="col-span-2 md:col-span-1 p-6">
            <h2 className="text-3xl font-bold">General</h2>
            <Separator className="mb-6 mt-2"/>
            <ul className="grid gap-6 list-disc">
              <li> <b >Fecha:</b> 20/10/1998</li>
              <li> <b>Lugar:</b> La concha de tu hermana </li>
              <li> <b>Federación:</b> Falopa </li>
              <li> <b>Otra info:</b> </li>
            </ul>
            <h2 className="text-3xl font-bold mb-6 mt-6">Openers</h2>
            <Separator className="mb-6 mt-2"/>
            <ul className="grid gap-6 list-disc">
              <li> <b>Sentadilla:</b> 200kg</li>
              <li> <b>Banco:</b> 100kg</li>
              <li> <b>Despegue:</b> 300kg</li>
            </ul>
            <Separator className="mb-6 mt-6"/>
            <div>
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
                    <NextCompForm/>
                </DialogContent>
            </Dialog>
            </div>
          </div>
        </TabsContent> 

      </Tabs>
    </Card>
  )
}
