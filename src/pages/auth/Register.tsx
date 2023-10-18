import { Label } from "@/components/ui/label"
import { AuthLayout } from "."
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useFormik } from 'formik';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import React, { useMemo } from "react"
import { Separator } from "@/components/ui/separator"
import { Link } from "react-router-dom"
import { RegisterProps } from "./interfaces/auth-interfaces";
import { registerValidators } from "./middlewares/register-validators";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUser } from "@/store/auth";
import { RootState } from "@/store/store";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { XOctagon } from "lucide-react";


export const Register = () => {

  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector((state: RootState) => state.auth);
  const isCheckingAuth = useMemo(() => status === 'checking', [status]);

  const [date, setDate] = React.useState<Date | undefined>(new Date())


  const validate = ( values: RegisterProps ) => {
    const errors = registerValidators(values);
    return errors
}  


  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      gym_name: '',
      foundation_date: '',
      gold_medals: 0,
      silver_medals: 0,
      bronce_medals: 0,
    },
    validate,
      onSubmit: ( values: RegisterProps ) => {
        values.foundation_date = date?.toISOString();
        dispatch<any>(startCreatingUser(values));
    },
  }) 

  
  return (
    <AuthLayout>
        <>
        <h2 className="text-lg md:text-2xl text-center mb-6">
            Registrate
        </h2>
        <div className="w-full mx-auto">
            <form className="mb-6" onSubmit={formik.handleSubmit}>

                <div>
                    <Label htmlFor="email">Nombre completo*</Label>
                    <Input
                      className="mt-1"
                      id="fullName"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.fullName}
                      placeholder="Nombre y apellido"
                      />
                </div>
                {formik.errors.fullName ? (
                  <div className="ml-auto">
                    <span className="text-xs text-red-400">{formik.errors.fullName}</span>
                  </div>
                ) : null}
                
                <div className="mt-4">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      className="mt-1"
                      id="email"
                      type="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      placeholder="ejemplo@google.com"
                      />
                </div>

                {formik.errors.email ? (
                  <div className="ml-auto">
                    <span className="text-xs text-red-400">{formik.errors.email}</span>
                  </div>
                ) : null}

                <div className="mt-4">
                    <Label htmlFor="email">Contraseña</Label>
                    <Input
                      className="mt-1"
                      id="password"
                      type="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      placeholder="Contraseña"/>
                </div>

                {formik.errors.password ? (
                  <div className="ml-auto">
                    <span className="text-xs text-red-400">{formik.errors.password}</span>
                  </div>
                ) : null}
                
                <div className="grid grid-cols-2 gap-6 mt-4">

                    <div className="col-span-2 md:col-span-1">
                        <Label htmlFor="email">Nombre del gimnasio</Label>
                        <Input
                          className="mt-1"
                          id="gym_name"
                          type="text"
                          onChange={formik.handleChange}
                          value={formik.values.gym_name}
                          placeholder="Mi gimnasio"
                          />
                        {formik.errors.gym_name ? (
                          <div className="ml-auto">
                            <span className="text-xs text-red-400">{formik.errors.gym_name}</span>
                          </div>
                        ) : null}
                    </div>
                    

                    <div className="col-span-2 md:col-span-1 flex flex-col mt-1">
                    <Label htmlFor="email" className="mb-1.5">Fecha de fundación del gimnasio</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant='outline' className="w-full">
                            {date ? new Intl.DateTimeFormat('es-ES', { month: 'long', day: 'numeric', year: 'numeric' }).format(date) : "seleccionar fecha"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent>
                            <Calendar mode="single"
                                captionLayout="dropdown-buttons"
                                fromYear={1900}
                                toYear={2030}
                                className="p-0"
                                id="foundation_date"
                                selected={date}
                                onSelect={setDate}
                                disabled={(date) =>
                                  date > new Date() || date < new Date("1900-01-01")
                                }
                                />
                                
                          </PopoverContent>
                        </Popover>
                        {formik.errors.foundation_date ? (
                          <div className="ml-auto">
                            <span className="text-xs text-red-400">{formik.errors.foundation_date}</span>
                          </div>
                        ) : null}
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6 mt-12">
                <Label htmlFor="email" className="col-span-3">Medallas obtenidas hasta la fecha</Label>
                <Separator className="col-span-3"/>
                
                  <div className="col-span-3 md:col-span-1">
                    <Label htmlFor="email">Oro</Label>
                    <Input
                      className="mt-1"
                        id="gold_medals"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.gold_medals}
                        placeholder="medallas de oro"
                        />
                        {formik.errors.gold_medals ? (
                          <div className="ml-auto">
                            <span className="text-xs text-red-400">{formik.errors.gold_medals}</span>
                          </div>
                        ) : null}
                  </div>
                  
                  <div className="col-span-3 md:col-span-1">
                    <Label htmlFor="email">Plata</Label>
                    <Input
                      className="mt-1"
                      id="silver_medals"
                      type="number"
                      onChange={formik.handleChange}
                      value={formik.values.silver_medals}
                      placeholder="medallas de plata"
                      />
                      {formik.errors.silver_medals ? (
                        <div className="ml-auto">
                          <span className="text-xs text-red-400">{formik.errors.silver_medals}</span>
                        </div>
                      ) : null}
                  </div>
                  <div className="col-span-3 md:col-span-1">
                    <Label htmlFor="email">Bronce</Label>
                    <Input
                      className="mt-1"
                      id="bronce_medals"
                      type="number"
                      onChange={formik.handleChange}
                      value={formik.values.bronce_medals}
                      placeholder="medallas de bronce"
                      />
                      {formik.errors.bronce_medals ? (
                        <div className="ml-auto">
                          <span className="text-xs text-red-400">{formik.errors.bronce_medals}</span>
                        </div>
                      ) : null}
                  </div>
                </div>
                <div className="mt-6">
                <Button size='lg' className="w-full" 
                  type="submit" 
                  disabled={isCheckingAuth}>
                    Registrarme
                </Button>
                </div>
                <Alert className={`mt-6 ${!!errorMessage ? 'block' : 'hidden' }`}>
                <XOctagon size={16} color="hsl(var(--primary)" />
                  <AlertTitle className="m-0">{ errorMessage }</AlertTitle>
                </Alert>
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
