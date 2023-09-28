import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@radix-ui/react-navigation-menu"
import { ThemeProvider } from "./components/ui/theme-provider"
import { ModeToggle } from "./components/ui/mode-toggle"
import { Link } from '@tanstack/react-router';
import { navigationMenuTriggerStyle } from "./components/ui/navigation-menu";
import { Separator } from "./components/ui/separator";
import { Button } from "./components/ui/button";

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
        <section className="grid grid-cols-2 h-screen justify-center items-center max-w-7xl m-auto">
          <div className="col-span-2 md:col-span-1">
            <h1 className="text-6xl text-center font-bold mb-4">DASH Powerlifting</h1>
            <p className="text-left text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ratione sapiente ea hic incidunt dolor aliquam porro vero obcaecati repudiandae. Recusandae dolores sunt voluptatibus numquam dolorem facilis eum unde impedit.</p>
            <Button size='lg' className="text-lg mt-4">
              Comenzar
            </Button>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h2>Imagen aquí</h2>
          </div>
        </section>
        <section>
          <h2 className="text-3xl text-center mb-4">Entrenadores de todo el mundo ya estan usando DASH Powerlifting</h2>
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
      </main>
    </ThemeProvider>
  )
}
