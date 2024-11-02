

import { Navegacion } from '../components/Nav';
import { About } from './About';
import { Contacto } from './Contacto';
import { Proyectos } from '../components/Proyectos';

export const Home = () => {
  return (
    <>
      <Navegacion />
      <About  />
      <Proyectos />
      <Contacto />
    </>
  );
};
