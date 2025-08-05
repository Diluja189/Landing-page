// StageOne.jsx
import { useContext } from "react";
import StageTwo from "./StageTwo";
import ThemeContext from "./Usedcontext";

function StageOne() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Stage One - {theme}</h1>
      <StageTwo />
    </div>
  );
}

export default StageOne;
