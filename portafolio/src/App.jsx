import Navbar from "./components/Navbar.jsx";
import Secciones from './components/Secciones.jsx';
import React from "react";

function App() {
  return (
    <>
    <Navbar />
    
    <Secciones nombre="Proyectos" />
    {/* <Secciones nombre="Habilidades" />
    <Secciones nombre="Acerca de mi" />
    <Secciones nombre="Contacto" /> */}

    </>
  );
}

export default App;
