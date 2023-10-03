import { Label } from "@/components/ui/label"
import { AuthLayout } from "."
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const Login = () => {




  return (
    <AuthLayout>
        <>
        <h2 className="text-lg md:text-2xl text-center mb-6">
            Ingresá con tu usuario
        </h2>
        <div className="w-full mx-auto">
            <form className="mb-6">
                <div className="mb-6">
                    <Label htmlFor="email">Email</Label>
                    <Input/>
                </div>
                <div>
                    <Label htmlFor="email">Contraseña</Label>
                    <Input/>
                </div>
            </form>
            <a href="" className="text-sm">Olvidé mi contraseña</a>
            <div className="grid grid-cols-2 gap-4 mt-6">
                <Button size='lg'>
                    Ingresar
                </Button>
                <Button size='lg' variant='outline'>
                    Registrarme
                </Button>
            </div>
        </div>
        </>
    </AuthLayout>
  )
}
