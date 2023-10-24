import { Badge } from "@/components/ui/badge"


export const GetStatusBadge = (status: boolean | JSX.Element) => {

  
  return (
    <>
      {status ? (
        <Badge>Activo</Badge>
      ) : (
        <Badge>Inactivo</Badge>
      )}
    </>
  )
}
