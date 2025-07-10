import Submodule1 from "@monorepo-example/submodule-1";
import Submodule2 from "@monorepo-example/submodule-2";
import RickAndMorty from "rick-and-morty";

import "./App.css";
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div>My projects</div>
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <div
          className="module-preview"
          onClick={() => navigate("/submodule-1")}
        >
          <Submodule1 />
        </div>
        <div
          className="module-preview"
          onClick={() => navigate("/submodule-2")}
        >
          <Submodule2 />
        </div>
        <div
          className="module-preview"
          onClick={() => navigate("/rick-and-morty")}
        >
          <RickAndMorty />
        </div>
      </div>
    </>
  );
}

export default App;
