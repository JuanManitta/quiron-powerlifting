import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { NewAthleteForm } from "./form/NewAthleteForm"
import { Edit } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import ClipLoader from "react-spinners/ClipLoader"


export const UserAthletesTable = () => {

 
  const { athletes, savingAthlete } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  

  const handleNavigate = (index: number) => {
    navigate(`/athletes/${index}`);
  }

  return (
    <Card>{ athletes.length === 0 ?
      <div className="h-72 flex flex-col items-center justify-center">
        <h1 className=" p-3 text-lg md:text-3xl text-center mb-6">Comenzá a agregar atletas a tu lista</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button size='lg'>Nuevo atleta</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="mb-4">Nuevo atleta</DialogTitle>
              <DialogDescription>
                Completa los campos para agregar un nuevo atleta.
              </DialogDescription>
            </DialogHeader>
              <NewAthleteForm/>
          </DialogContent>
        </Dialog>
      </div>
      :
      <>
        { savingAthlete ? 
      <div className="flex justify-center items-center h-40">
        <ClipLoader color="#36d7b7" size={90} />
      </div>
      :
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Atleta</TableHead>
              <TableHead>Sentadilla</TableHead>
              <TableHead>Banco</TableHead>
              <TableHead>Despegue</TableHead>
              <TableHead className="w-1/6 p-2">
                <Dialog>
                    <DialogTrigger asChild>
                      <Button size='lg'>Nuevo atleta</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle className="mb-4">Nuevo atleta</DialogTitle>
                        <DialogDescription>
                          Completa los campos para agregar un nuevo atleta.
                        </DialogDescription>
                      </DialogHeader>

                        <NewAthleteForm/>

                    </DialogContent>
                </Dialog>
              </TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
                {athletes.map((athlete ) => (
                  <TableRow key={athlete.id}>
                    <TableCell className="font-medium">{athlete.fullName}</TableCell>
                    <TableCell>{athlete.squat}</TableCell>
                    <TableCell>{athlete.bench}</TableCell>
                    <TableCell>{athlete.deadlift}</TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                      <Button variant='ghost' onClick={()=>handleNavigate(athlete.id)}>
                        <Edit/>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
        </Table>
            } 
      </>
      
    
    
    
    }
      </Card>
  )
}
