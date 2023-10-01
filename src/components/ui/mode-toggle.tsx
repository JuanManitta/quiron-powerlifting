 
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/ui/theme-provider"
import { Moon, Sun } from "lucide-react";
 
export function ModeToggle() {
  const { setTheme, theme  } = useTheme()

  const handleChangeTheme = () => {
    const themeMode = theme === 'light' ? 'dark' : 'light';
    setTheme(themeMode);    
  }
 
  return (
    <Button onClick={handleChangeTheme} variant='ghost' size='icon' >
      { theme === 'dark' ? <Sun/> : <Moon/> }
    </Button>
  )
}