import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@radix-ui/react-navigation-menu"
import { ThemeProvider } from "./components/ui/theme-provider"
import { ModeToggle } from "./components/ui/mode-toggle"
import { Link } from '@tanstack/react-router';
import { navigationMenuTriggerStyle } from "./components/ui/navigation-menu";
import { Separator } from "./components/ui/separator";
import { Button } from "./components/ui/button";

import  background1  from './assets/fondo-1.png';

export const App = () => {
  const routes = [
    {
      link:
        <Link to="/home"
        activeProps={{ 
          style:{
          fontWeight:'bold', 
          fontSize:'16px', 
          color:'hsl(var(--muted-foreground))'
          }}}>
                <Button size='lg'> 
Crear cuenta </Button>
        </Link>
      ,
    },
    {
      link: 
      <Link to="/home"
      activeProps={{ 
        style:{
        fontWeight:'bold', 
        fontSize:'16px', 
        color:'hsl(var(--muted-foreground))'
        }}}>
        Ingresar
      </Link>,
    },
  ];
  return (
    <ThemeProvider>
      <NavigationMenu>
        <NavigationMenuList className="p-4">
          { routes.map((route, index ) => (
              <NavigationMenuItem 
                key={index} 
                className={navigationMenuTriggerStyle()}>
                { route.link }
              </NavigationMenuItem>
            ))}
              <ModeToggle/>
        </NavigationMenuList>
      </NavigationMenu>
      <Separator />
      <main>
        
        <section className="grid grid-cols-2 h-screen justify-center items-center ">
          <div className="col-span-2 lg:col-span-1 flex justify-center lg:justify-end">
            <div className="max-w-2xl">
              <h1 className="text-6xl text-center font-bold mb-4 ">DASH Powerlifting</h1>
              <p className="text-left text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ratione sapiente ea hic incidunt dolor aliquam porro vero obcaecati repudiandae. Recusandae dolores sunt voluptatibus numquam dolorem facilis eum unde impedit.</p>
              <Button size='lg' className="text-lg mt-4">
                Comenzar
              </Button>
            </div>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <img src={ background1 }  alt="" />
          </div>
        </section>

        <section className="pb-6">
          <h2 className="text-3xl text-center mb-12">Entrenadores de todo el mundo ya estan usando DASH Powerlifting</h2>
          <div className="p-4 bg-primary flex justify-around">
            <div className="flex flex-col">
              <span className="text-6xl m-auto">40+</span>
              <span className="text-2xl">Entrenadores</span>
            </div>
            <div className="flex flex-col">
              <span className="text-6xl m-auto">40+</span>
              <span className="text-2xl">Entrenadores</span>
            </div>
            <div className="flex flex-col">
              <span className="text-6xl m-auto">40+</span>
              <span className="text-2xl">Entrenadores</span>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 justify-center py-12">

          <div className="col-span-2">
            <h3 className="text-center text-6xl py-12">¿Cómo funciona?</h3>
          </div>

          <div className="col-span-2 max-w-5xl mx-auto py-12">
            <p className="text-center text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vitae impedit reprehenderit aliquid ullam, magni fugit deleniti amet dignissimos et eaque rem dolorum natus quia earum aliquam accusamus voluptas nemo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsa, totam amet aliquid necessitatibus porro quasi sequi nulla eum quia cum sapiente rerum iste veniam, minus perspiciatis fugit? Illum, distinctio.</p>
          </div>
          <div className="col-span-1 py-12">
          <img src={ background1 }  alt="" />

          </div>
          <div className="col-span-1 py-12">
            <img src={ background1 }  alt="" />
          </div>
          <div className="col-span-2 py-6">
            <Button className="ml-12" size='lg' variant='secondary'>
              Comenzar
            </Button>
          </div>

        </section>

        <section className="grid grid-cols-2 py-12">
          <div className="col-span-2">
            <h4 className="text-5xl text-center mb-4 py-12">Estadísticas en tiempo real</h4>
          </div>
          <div className="col-span-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, odit. Nostrum non in harum assumenda reprehenderit cumque tempora aliquid quas voluptate ullam ex, magni est ipsum iste quam! Recusandae, autem.
          </div>
          <div className="col-span-1">
            iconos
          </div>
          <div>
            <Button>
              Comenzar
            </Button>
          </div>
        </section>

      </main>
    </ThemeProvider>
  )
}
