
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator";
import { ThemeProvider } from "./components/ui/theme-provider";
import { ModeToggle } from "./components/ui/mode-toggle";
import * as React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { LogOut} from "lucide-react";
import { Button } from "./components/ui/button";
import { useDispatch } from "react-redux";
import { startLogout } from "./store/auth";
import { Toaster } from "./components/ui/toaster";

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {

  const dispath = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispath<any>(startLogout());
    navigate('/');
  }
  
 
  const routes = [
    {
      link: 
      <NavLink to="/home">
        Home
      </NavLink>,
    },
    {
      link: <NavLink to="/athletes">
        Atletas
      </NavLink>
    },
    {
      link: <NavLink to="/workouts">
        Entrenamientos
      </NavLink>
    },
    {
      link: <NavLink to="/competitions">
        Competiciones
      </NavLink>
    },
  ];
  
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NavigationMenu className="p-3">
        <NavigationMenuList>
          { routes.map((route, index) => (
            <NavigationMenuItem id="nav_bar" key={index} className={navigationMenuTriggerStyle()}>
              {route.link}
            </NavigationMenuItem>
          ))}
          <Button variant='ghost' onClick={handleLogout}>
            <LogOut/>
          </Button>
            <ModeToggle/>
        </NavigationMenuList>
      </NavigationMenu>

      <Separator />
      {children}
      <Toaster/>
      </ThemeProvider>
  )
}

export default Layout
