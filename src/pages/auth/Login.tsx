import { Label } from "@/components/ui/label"
import { AuthLayout } from "."
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { startLoginUser } from "@/store/auth"
import { RootState } from "@/store/store"
import { useMemo } from "react"
import { Alert, AlertTitle } from "@/components/ui/alert"
import { XOctagon } from "lucide-react"
import { LoginProps } from "./interfaces/auth-interfaces"



export const Login = () => {

    const dispatch = useDispatch();
    const { status, errorMessage } = useSelector((state: RootState) => state.auth);
    const isCheckingAuth = useMemo(() => status === 'checking', [status]);


    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
          onSubmit: ( values: LoginProps ) => {
            dispatch<any>(startLoginUser(values))
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
            <Alert className={`mt-6 ${!!errorMessage ? 'block' : 'hidden' }`}>
                <XOctagon size={16} color="hsl(var(--primary)" />
                  <AlertTitle className="m-0">{ errorMessage }</AlertTitle>
                </Alert>
            <div className="mt-6">
                <Button size='lg' type="submit" className="w-full"
                    disabled={isCheckingAuth}>
                    Ingresar
                </Button>
            </div>
            </form>
            <Link to="/auth/register" className="w-full">
                <Button size='lg' variant='outline' className="w-full"
                    disabled={isCheckingAuth}>
                        Crear cuenta
                </Button>
            </Link>
        </div>
        </>
    </AuthLayout>
  )
}
