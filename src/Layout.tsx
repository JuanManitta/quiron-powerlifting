import { Link, Outlet } from "@tanstack/react-router";

import { NavigationMenu, NavigationMenuItem, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator";
import { ThemeProvider } from "./components/ui/theme-provider";
import { ModeToggle } from "./components/ui/mode-toggle";


function Layout() {
  
 
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
        Home
      </Link>,
    },
    {
      link: <Link to="/athletes"
      activeProps={{ 
        style:{
        fontWeight:'bold', 
        fontSize:'16px', 
        color:'hsl(var(--muted-foreground))'
        }}}>Atletas
      </Link>
    },
    {
      link: <Link to="/workouts"
      activeProps={{ 
        style:{
        fontWeight:'bold', 
        fontSize:'16px', 
        color:'hsl(var(--muted-foreground))'
        }}}>Entrenamientos
      </Link>
    },
    {
      link: <Link to="/competitions"
      activeProps={{ 
        style:{
        fontWeight:'bold', 
        fontSize:'16px', 
        color:'hsl(var(--muted-foreground))'
        }}}>Competiciones
      </Link>
    },
  ];
  
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      
      <NavigationMenu className="ml-auto">
        <NavigationMenuList>
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

      <Outlet />
      </ThemeProvider>
  )
}

export default Layout
