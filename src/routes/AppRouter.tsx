import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { About } from "../pages/About"
import { Contacto } from "../pages/Contacto"
import { Proyectos } from "../pages/Proyectos"

export const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacto />} />
        <Route path="/proyects" element={<Proyectos />} />


    </Routes>
    </BrowserRouter>
    </>
  )
}
