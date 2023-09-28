import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const UserAthletesTable = () => {

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
        
      ]
  return (
    <Card className="p-3">
        <Table>
          <TableCaption>A list of your recent names.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">name</TableHead>
              <TableHead>Sentadilla</TableHead>
              <TableHead>Bench</TableHead>
              <TableHead>Deadlift</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.name}>
                    <TableCell className="font-medium">{invoice.name}</TableCell>
                    <TableCell>{invoice.squat}</TableCell>
                    <TableCell>{invoice.bench}</TableCell>
                    <TableCell>{invoice.deadlift}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
        </Table>
      </Card>
  )
}
