import { Label } from "@/components/ui/label"
import { AuthLayout } from "."
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import { login } from "@/store/auth/authSlice"
import { Link } from "react-router-dom"

export const Login = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
          onSubmit: ( values: any ) => {
            dispatch(login(values));
            // guardar en localstorage
            const user = JSON.stringify(values);
            localStorage.setItem('user', user);
        },
      })
      


  return (

    <AuthLayout>
        <>
        <h2 className="text-lg md:text-2xl text-center mb-6">
            Ingresá con tu usuario
        </h2>
        <div className="w-full mx-auto">
            <form className="mb-6" onSubmit={formik.handleSubmit}>
                <div className="mb-6">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        onChange={formik.handleChange}/>
                </div>
                <div>
                    <Label htmlFor="email">Contraseña</Label>
                    <Input
                        id="password"
                        type="password"
                        onChange={formik.handleChange}/>
                </div>
            
            <a href="" className="text-sm">Olvidé mi contraseña</a>
            <div className="mt-6">
                <Button size='lg' type="submit" className="w-full">
                    Ingresar
                </Button>
            </div>
            </form>
            <Link to="/auth/register" className="w-full">
                <Button size='lg' variant='outline' className="w-full">
                        Crear cuenta
                </Button>
            </Link>
        </div>
        </>
    </AuthLayout>
  )
}
