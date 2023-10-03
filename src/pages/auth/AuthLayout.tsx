import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import imagen from '../../assets/fondo-1.png'

import { ThemeProvider } from "@/components/ui/theme-provider";

type AuthLayoutProps = {
    children: React.ReactNode,
};






export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <ThemeProvider>
        <main className="grid grid-cols-12 min-h-screen">
            <section className="col-span-12 xl:col-span-4 flex flex-col flex-1 justify-center px-8 md:px-32 lg:px-32 xl:px-16">
                <h1 className="text-4xl md:text-6xl text-center mb-6 font-bold">
                    DASH Powerlifting
                </h1>
                { children }
            </section>
            <section className="col-span-2 xl:col-span-7 hidden xl:flex flex-col flex-1 justify-center px-16 ">
                <img src={imagen} alt="" />
            </section>
        </main>
    </ThemeProvider>
  )
}
