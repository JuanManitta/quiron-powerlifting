
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";

  import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"

import { Athlete } from "@/interfaces/athlete.interface";
import { MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startDeletingAthlete, startEditingAthleteStatus } from "@/store/user";


export const ActionButtons = ({ athlete }: { athlete:Athlete }) => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch<any>(startDeletingAthlete(id))
  }
  
  const handleChangeStatus = (athlete:Athlete) => {
    dispatch<any>(startEditingAthleteStatus(athlete))    
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => navigate(`/athletes/${athlete.id}`)}
        >
          Editar
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={()=>handleChangeStatus(athlete)}>
          {athlete.isActive ? "Desactivar" : "Activar"}
        </DropdownMenuItem>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button 
              variant="ghost" size='sm' 
              className="px-2 w-full justify-start">
                Eliminar
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Estas absolutamente seguro?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta accion no se puede deshacer, estas a punto de eliminar al
                atleta de nuestros servidores.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={()=>handleDelete(athlete.id)}>
                Eliminar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
