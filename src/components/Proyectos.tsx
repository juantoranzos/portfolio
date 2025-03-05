import { FaCss3, FaHtml5, FaJs, FaReact, FaBootstrap, FaNodeJs} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import banco from "../img/banco.webp";
import sge from "../img/sge-DAXH5DF_.webp";
import guay from "../img/guaymascons.webp";
import clima from "../img/clima.webp";
import traducciones from "../helpers/traduccion";
import useLangStore from "../store/langStore";
import elociofoto from "../img/elociodepapel.png"

export const Proyectos = () => {
  const { language }: any = useLangStore();

  const projectData = [
    {
      title: "Banco",
      link: "https://rollingbankjt.netlify.app/",
      image: banco,
      alt: "RollingBank",
      tecnologias: [<FaHtml5 key="html" />, <FaCss3 key="css" />, <FaBootstrap key="bootstrap" />],
      description: traducciones[language].descripcionbanco,
    },
    {
      title: "App del Clima",
      link: "https://chilaclima.netlify.app/",
      image: clima,
      alt: "App del Clima",
      tecnologias: [<FaHtml5 key="html" />, <FaCss3 key="css" />, <FaJs key="js" />],
      description: traducciones[language].descripcionappclima,
    },
    {
      title: "Sistema de Gestión Educativa",
      link: "https://github.com/juantoranzos/proyectoFinalReactAdv",
      image: sge,
      alt: "Sistema de Gestión Educativa",
      tecnologias: [<FaReact key="react" />, <FaJs key="js" />, <FaBootstrap key="bootstrap" />, <FaCss3 key="css" />],
      description: traducciones[language].descripcionsge,
    },
    {
      title: "GuaymasCons",
      link: "https://guaymasconstruccionesciviles.netlify.app/",
      image: guay,
      alt: "GuaymasCons",
      tecnologias: [<FaHtml5 key="html" />, <FaCss3 key="css" />, <FaJs key="js" />, <FaReact key="react" />, <FaBootstrap key="bootstrap" />],
      description: traducciones[language].descripcionguay,
    },
    {
      title: "El Ocio",
      link: "https://elocio.netlify.app/",
      image: elociofoto,
      alt: "El Ocio",
      tecnologias: [<FaHtml5 key="html" />, <FaCss3 key="css" />, <FaJs key="js" />, <FaReact key="react" />, <FaBootstrap key="bootstrap" />, <FaNodeJs key="node" />, <SiMongodb />],
      description: traducciones[language].descripcionocio,
    }
  ];

  return (
    <>
      <h3 className="text-center text-info p-3 font-weight-bold m-3 fs-1" data-aos="fade">
        {traducciones[language].proyectos}
      </h3>
      <section className="container">
        <div className="row d-flex flex-wrap gap-4 justify-content-center">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-4 text-center shadow-lg rounded-xl p-2"
              data-aos={index % 2 === 0 ? "flip-left" : "flip-right"}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.alt} className="pb-4 img-fluid" />
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium pt-8 pb-2 text-white d-block"
              >
                {project.title}
              </a>
              <p className="py-2 text-white text-justify">{project.description}</p>
              <h4 className="py-4 text-info">{traducciones[language].herramientas}</h4>
              <div className="d-flex justify-content-center gap-3 text-3xl py-2">
                {project.tecnologias.map((TecnologiaIcon, tecnologiaIndex) => (
                  <span key={tecnologiaIndex} className="text-white icon">
                    {TecnologiaIcon}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Proyectos;
