import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { NewAthleteForm } from "./form/NewAthleteForm"
import { Edit } from "lucide-react"
import { useNavigate } from "react-router-dom"


export const UserAthletesTable = () => {

 
  const navigate = useNavigate();

  const handleNavigate = (index: number) => {
    navigate(`/athletes/${index}`);
  }
  const invoices = [
    {
      name: "Juan Manitta",
      squat: "200",
      bench:"100",
      deadlift: "180",
    },
    {
      name: "Luis Virgini",
      squat: "220",
      bench:"100",
      deadlift: "300",
    },
    {
      name: "Marina Mazzocchini",
      squat: "120",
      bench:"100",
      deadlift: "130",
    },
    {
      name: "Juan Manittas",
      squat: "200",
      bench:"100",
      deadlift: "180",
    },
    {
      name: "Luis Virginii",
      squat: "220",
      bench:"100",
      deadlift: "300",
    },
    {
      name: "Marina Mazzocchinii",
      squat: "120",
      bench:"100",
      deadlift: "130",
    }, 
  ];



  return (
    <Card>
        <Table>
          <TableCaption>A list of your recent names.</TableCaption>
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
                {invoices.map((invoice, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{invoice.name}</TableCell>
                    <TableCell>{invoice.squat}</TableCell>
                    <TableCell>{invoice.bench}</TableCell>
                    <TableCell>{invoice.deadlift}</TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                      <Button variant='ghost' onClick={()=>handleNavigate(index)}>
                        <Edit/>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
        </Table>
      </Card>
  )
}
