import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Rastreamento from "../pages/Rastreamento";
import QuemSomos from "../pages/QuemSomos";
import FaleConosco from "../pages/FaleConosco";
import Marketplace from "../pages/Marketplace";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        Home
      </Route>
      <Route path="/Rastreamento" element={<Rastreamento />}>
        Rastreamento
      </Route>
      <Route path="/Quem-somos" element={<QuemSomos />}>
        Quem Somos
      </Route>
      <Route path="/Fale-conosco" element={<FaleConosco />}>
        Fale Conosco
      </Route>
      <Route path="/Marketplace" element={<Marketplace />}>
        Marketplace
      </Route>
    </Routes>
  );
}

export default Rotas;
