

import { Navegacion } from '../components/Nav';
import { About } from './About';
import { Proyectos } from '../components/Proyectos';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <>
      <Navegacion />
      <About  />
      <Proyectos />
      
      <Footer />
    </>
  );
};
