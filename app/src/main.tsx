import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import SubModule1 from "@monorepo-example/submodule-1";
import SubModule2 from "@monorepo-example/submodule-1";
import RickAndMorty from "rick-and-morty";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/about-me/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/submodule-1" element={<SubModule1 />} />
        <Route path="/submodule-2" element={<SubModule2 />} />
        <Route path="/rick-and-morty" element={<RickAndMorty />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
