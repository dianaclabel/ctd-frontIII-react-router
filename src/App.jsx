import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Beer from "./pages/Beer";

function App() {
  return (
    <>
      <div>
        <h1>Mas que solo bebidas, festejemos el encuentro.</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/beer/:id" element={<Beer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
