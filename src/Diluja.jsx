import { useState } from "react";
import ThemeContext from "./Usedcontext";
import StageOne from "./stageone";

function Diluja() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <>
        <h1>
          HI DILUJA - {theme}
        </h1>
        <StageOne />
        <button 
        style={{
    backgroundColor: theme === "light" ? "blue" : "red", 
    color: "green",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "4px",
  }}
         onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Change the Theme
        </button>
      </>
    </ThemeContext.Provider>
  );
}

export default Diluja;