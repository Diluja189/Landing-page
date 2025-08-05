
import { useContext } from "react";
import StageThree from "./StageThree";
import ThemeContext from "./Usedcontext";

function StageTwo() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Stage Two - {theme}</h1>
      <StageThree />
    </div>
  );
}

export default StageTwo;
