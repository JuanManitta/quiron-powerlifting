import { Label } from "@/components/ui/label"
import { AuthLayout } from "."
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import React from "react"
import { Separator } from "@/components/ui/separator"
import { Link } from "react-router-dom"

export const Register = () => {

  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <AuthLayout>
        <>
        <h2 className="text-lg md:text-2xl text-center mb-6">
            Registrate
        </h2>
        <div className="w-full mx-auto">
            <form className="mb-6">

                <div className="mb-6">
                    <Label htmlFor="email">Nombre completo</Label>
                    <Input/>
                </div>
                <div className="mb-6">
                    <Label htmlFor="email">Email</Label>
                    <Input/>
                </div>

                <div className="mb-6">
                    <Label htmlFor="email">Contraseña</Label>
                    <Input/>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className="mb-6 col-span-1">
                        <Label htmlFor="email">Nombre del gimnasio</Label>
                        <Input/>
                    </div>

                    <div className="mb-6 col-span-1 flex flex-col justify-end">
                    <Label htmlFor="email" className="mb-1.5">Fecha de fundación del gimnasio</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant='outline' className="w-full">
                                Seleccionar fecha
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent>
                            <Calendar mode="single"
                                selected={date}
                                onSelect={setDate}/>
                          </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-6 mb-12">
                <Label htmlFor="email" className="col-span-3">Medallas obtenidas hasta la fecha</Label>
                <Separator className="col-span-3"/>
                  <div className="col-span-1">
                    <Label htmlFor="email">Oro</Label>
                    <Input/>
                  </div>
                  <div className="col-span-1">
                    <Label htmlFor="email">Plata</Label>
                    <Input/>
                  </div>
                  <div className="col-span-1">
                    <Label htmlFor="email">Bronce</Label>
                    <Input/>
                  </div>
                </div>
                <div className="mt-6">
                <Button size='lg' className="w-full" type="submit">
                    Registrarme
                </Button>
                </div>
            </form>
            <Link to="/auth/login" className="w-full">
            <Button size='lg' variant='outline' className="w-full">
                Ya tengo cuenta
            </Button>
            </Link>
        </div>
        </>
    </AuthLayout>
  )
}
