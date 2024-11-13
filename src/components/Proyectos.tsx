import { FaCss3, FaHtml5, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import banco from "../img/banco.webp";
import sge from "../img/sge-DAXH5DF_.webp";
import guay from "../img/guaymascons.webp";
import clima from "../img/clima.webp";

export const Proyectos = () => {
    const projectData = [{
      title:'Banco',
      link: 'https://rollingbankjt.netlify.app/',
      image: banco,
      alt: 'RollingBank',
      tecnologias: [<FaHtml5 />, <FaCss3 />, <FaBootstrap/>],
      description: 'Esta página presenta un banco virtual, con una barra de navegación que permite explorar varias opciones como información sobre precios, seguridad, y servicios ofrecidos. Además, incluye secciones detalladas que explican los beneficios, las políticas de mantenimiento, las transferencias, el pago de servicios, y más, brindando una experiencia accesible y completa al usuario.'
    },{
        title: 'App del Clima',
        link: 'https://chilaclima.netlify.app/',
        image: clima,
        alt: 'App del Clima',
        tecnologias: [ <FaHtml5 />, <FaCss3 />, <FaJs />],
        description: 'App del Clima, esta aplicación proporciona pronósticos meteorológicos precisos y actualizados. Consume una API del pronóstico mundial para ofrecer a los usuarios información sobre el clima en tiempo real, incluyendo temperatura, condiciones atmosféricas y previsiones extendidas.'

    },{
        title: 'Sistema de Gestion Educativa',
        link: 'https://github.com/juantoranzos/proyectoFinalReactAdv',
        image: sge,
        alt: 'Sistema de Gestion Educativa',
        tecnologias: [<FaReact />, <FaJs />, <FaBootstrap />, <FaCss3 />],
        description: 'Proyecto final del curso avanzado de React en RollingCode. Desarrollo de un sistema de gestión educativa con múltiples funcionalidades: administración de usuarios, gestión de cursos, asignaturas, horarios, asistencias, calificaciones y novedades. Implementa Zustand para la gestión de estado global.'

    },{
        title: 'GuaymasCons',
        link: 'https://construccionescivilesguaymas.netlify.app/',
        image: guay,
        alt: 'GuaymasCons',
        tecnologias: [<FaHtml5 />, <FaCss3 />, <FaJs />, <FaReact />, <FaBootstrap />],
        description: 'Diseñada para presentar los servicios y proyectos de una empresa minera, esta landing page combina un diseño atractivo y funcional. Utiliza las ultimas tecnologías para ofrecer una experiencia de usuario intuitiva, con secciones informativas sobre la empresa, sus proyectos y el impacto en la comunidad. Ideal para captar la atención de clientes potenciales y socios estratégicos.'
    },
]
    return (
        <>
        <h3 className="text-center text-white p-3 font-weight-bold m-3 fs-1">Proyectos</h3>
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
              <h4 className="py-4 text-white">Herramientas de trabajo:</h4>
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
