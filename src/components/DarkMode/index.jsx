import "./styles.css";
import Sun from "@mui/icons-material/LightMode";
import Moon from "@mui/icons-material/Brightness3";
import { useState } from "react";

export default function DarkMode() {

  const [active, setActive] = useState(false)

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "dark");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "dark") {
    setDarkMode();
  }
  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "dark"}
      />
      <label className="dark_mode_label" for="darkmode-toggle" onClick={() => setActive(!active)}>
        {active ? 
        <Sun sx={{color: "black"}} className="icon"/> :
        <Moon sx={{color: "white"}} className="icon"/>  
      }
      </label>
    </div>
  );
}
