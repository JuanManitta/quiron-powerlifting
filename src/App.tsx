import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@radix-ui/react-navigation-menu"
import { ThemeProvider } from "./components/ui/theme-provider"
import { ModeToggle } from "./components/ui/mode-toggle"
import { Separator } from "./components/ui/separator";
import { Button } from "./components/ui/button";

import  background1  from './assets/fondo-1.png';
import { Facebook, Instagram, Mail, Twitter } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Path = 'login' | 'register';


export const App = () => {

  const navigate = useNavigate();

  const handleNavigate = (path:Path) => {
    navigate(`auth/${path}`);
  }


  return (
    <ThemeProvider>
      <NavigationMenu>
        <NavigationMenuList className="p-4 flex items-center">
          <NavigationMenuItem>
            <Button onClick={() => handleNavigate('register')} className="mr-3" size='lg'>
              Crear cuenta 
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button onClick={() => handleNavigate('login')} variant='ghost' className="mr-3" size='lg'>
              Ingresar
            </Button>
          </NavigationMenuItem>
          <ModeToggle/>
        </NavigationMenuList>
      </NavigationMenu>
      <Separator />
      <main className="mx-auto">
        <section className="p-6">
          <div className="grid grid-cols-2 h-screen justify-center items-center m-auto max-w-7xl ">
            <div className="col-span-2 lg:col-span-1 flex justify-center lg:justify-end">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-6xl text-left md:text-center font-bold mb-4 ">DASH Powerlifting</h1>
                <p className="text-left text-md md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ratione sapiente ea hic incidunt dolor aliquam porro vero obcaecati repudiandae. Recusandae dolores sunt voluptatibus numquam dolorem facilis eum unde impedit.</p>
                <div className="py-12">
                  <Button size='lg' className="text-lg mt-4" onClick={() => handleNavigate('register')}>
                    Comenzar
                  </Button>
                </div>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-1">
              <img src={ background1 }  alt="" />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl mg:text-3xl text-left md:text-center pb-12 p-6">
            Entrenadores de todo el mundo ya estan usando DASH Powerlifting
          </h2>
          <div className="bg-primary">
            <div className="m-auto max-w-7xl ">
              <div className="p-4  flex justify-around">
                <div className="flex flex-col">
                  <span className="text-3xl md:text-6xl m-auto">40+</span>
                  <span className="text-lg md:text-2xl">Entrenadores</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl md:text-6xl m-auto">40+</span>
                  <span className="text-lg md:text-2xl">Entrenadores</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl md:text-6xl m-auto">40+</span>
                  <span className="text-lg md:text-2xl">Entrenadores</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-foreground text-accent p-6">

          <div className="grid grid-cols-2 justify-center py-16 m-auto max-w-7xl">
            <div className="col-span-2">
              <h3 className="text-center text-4xl md:text-6xl py-16 font-bold">¿Cómo funciona?</h3>
            </div>

            <div className="col-span-2 max-w-5xl mx-auto py-16">
              <p className="text-center text-md md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vitae impedit reprehenderit aliquid ullam, magni fugit deleniti amet dignissimos et eaque rem dolorum natus quia earum aliquam accusamus voluptas nemo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsa, totam amet aliquid necessitatibus porro quasi sequi nulla eum quia cum sapiente rerum iste veniam, minus perspiciatis fugit? Illum, distinctio.</p>
            </div>

            <div className="col-span-2 md:col-span-1 py-12">
              <img src={ background1 }  alt="" />
            </div>

            <div className="col-span-2 md:col-span-1 py-12">
              <img src={ background1 }  alt="" />
            </div>

            <div className="col-span-2 py-6">
              <Button className="ml-12 text-lg" size='lg' variant='secondary' onClick={() => handleNavigate('register')}>
                Comenzar
              </Button>
            </div>
          </div>

        </section>

        <section className="p-6">
          <div className="grid grid-cols-2 py-16 gap-12 m-auto max-w-7xl">
            <div className="col-span-2">
              <h4 className="text-4xl md:text-5xl text-center mb-4 py-16 font-bold">Estadísticas en tiempo real</h4>
            </div>

            <div className="col-span-2 lg:col-span-1">
              <img src={ background1 }  alt="" />
            </div>

            <div className="col-span-2 lg:col-span-1 py-16">
              <p className="text-md md:text-lg"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae aperiam omnis odio officia reiciendis repudiandae fugiat accusantium cumque porro explicabo, alias obcaecati corporis ipsam, sapiente distinctio quo accusamus ipsum debitis!</p>
              <div className="py-12">
                <Button size='lg' className="text-lg" onClick={() => handleNavigate('register')} >
                  Comenzar
                </Button>
              </div>
            </div>
          </div>
      
        </section>
      </main>
      <footer className="bg-foreground p-6 text-accent">
        <section className="grid grid-cols-2 max-w-7xl m-auto py-12">

          <div className="col-span-2 lg:col-span-1">
            <h4 className=" text-4xl mb-12">
              Preguntas frecuentes
            </h4>
            <div>
              <ul>
                <li className=" mt-6">
                  <span className="font-bold">¿Lorem ipsum dolor sit amet?</span>
                  <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, est atque veniam accusamus quis aliquam!</p>
                </li>
                <li className="mt-6">
                  <span className="font-bold">¿Lorem ipsum dolor sit amet?</span>
                  <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, est atque veniam accusamus quis aliquam!</p>
                </li>
                <li className="mt-6">
                  <span className="font-bold">¿Lorem ipsum dolor sit amet?</span>
                  <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, est atque veniam accusamus quis aliquam!</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 lg:ml-auto ml-0 pt-16 lg:pt-0">
            <h4 className="text-accent text-4xl">Nuestras redes</h4>
            <div className="flex justify-between py-12">
              <Instagram color="grey"/>
              <Facebook color="grey"/>
              <Twitter color="grey"/>
              <Mail color="grey"/>
            </div>
          </div>
        </section>
        <div className="col-span-2 lg:col-span-1">
          <h6 className="text-center opacity-70">
          © 2023 Dash Powerlifting. All rights reserved.
          </h6>
        </div>
      </footer>
    </ThemeProvider>
  )
}
