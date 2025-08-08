import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

const ThemeToggle = () => {

    useEffect(() => {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme === "light") {
        setIsLightMode(true);
        document.documentElement.classList.add("light");
      } else {
        setIsLightMode(false);
        document.documentElement.classList.remove("light");
      }
    }, []);

    const [isLightMode, setIsLightMode] = useState(false);


    const toggleTheme = () => {
        if (isLightMode) {
            document.documentElement.classList.remove("light");
            localStorage.setItem("theme", "dark");
            setIsLightMode(false);
        }else {
            document.documentElement.classList.add("light");
            localStorage.setItem("theme", "light");
            setIsLightMode(true);
        }
    }

  return (
    <div>
      <button onClick={toggleTheme}>
        {isLightMode ? (
          <Moon className="h-6 w-6 text-blue-900" />
        ) : (
          <Sun className="h-6 w-6 text-yellow-300" />
        )}
      </button>
    </div>
  );
}

export default ThemeToggle