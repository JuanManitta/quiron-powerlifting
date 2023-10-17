import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import 'animate.css';


export const UserAthletesTable = () => {

  const { athletes } = useSelector((state: RootState) => state.user);

  return (
    <Card>
      { athletes.length <= 0 ? 
      <div className="flex justify-center items-center h-40">
        <ClipLoader color="#36d7b7" size={90} />
      </div>
      :
      <Table className="animate__animated animate__fadeIn">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Atleta</TableHead>
            <TableHead>Sentadilla</TableHead>
            <TableHead>Banco</TableHead>
            <TableHead>Despegue</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {athletes.map((athlete) => (
            <TableRow key={athlete.id}>
              <TableCell className="font-medium">{athlete.fullName}</TableCell>
              <TableCell>{athlete.squat}</TableCell>
              <TableCell>{athlete.bench}</TableCell>
              <TableCell>{athlete.deadlift}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> }
    </Card>
  )
}
