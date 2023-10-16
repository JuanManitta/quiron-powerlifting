
import imagen from '../../assets/fondo-1.png'

import ClipLoader from "react-spinners/ClipLoader";


import { ThemeProvider } from "@/components/ui/theme-provider";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

type AuthLayoutProps = {
    children: React.ReactNode,
};






export const AuthLayout = ({ children }: AuthLayoutProps) => {



    const { status } = useSelector((state: RootState) => state.auth);
    const isCheckingAuth = useMemo(() => status === 'checking', [status]);




  return (
    <ThemeProvider>
        <main className="grid grid-cols-12 min-h-screen">
           
           <section className="col-span-12 xl:col-span-4 flex flex-col flex-1 justify-center px-8 md:px-32 lg:px-32 xl:px-16">
                <h1 className="text-4xl md:text-6xl text-center mb-6 font-bold">
                    DASH Powerlifting
                </h1>
                { !isCheckingAuth 
                    ? <div>{ children }</div> 
                    : <div className="flex justify-center h-64 items-center"> <ClipLoader color="#36d7b7" /> </div> }
            </section>  
            <section className="col-span-2 xl:col-span-7 hidden xl:flex flex-col flex-1 justify-center px-16 ">
                <img src={imagen} alt="" />
            </section>
        </main>
    </ThemeProvider>
  )
}
