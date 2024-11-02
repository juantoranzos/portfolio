import { FaCss3, FaHtml5, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import banco from "../img/banco.webp";
import sge from "../img/sge-DAXH5DF_.webp";
import guay from "../img/guaymascons.webp";
import clima from "../img/clima.webp";
import { BiLogoTypescript } from "react-icons/bi";

export const Proyectos = () => {
    return (
        <>
            <h3 className="text-center text-white p-3 m-3 font-weight-bold fs-1">Proyectos</h3>
            <section className="container p-2 gap-2 ">
                <div className="row">
                    <div className="col-12 col-md-6 text-center shadow-lg rounded-xl  p-2" data-aos="flip-left">
                        <a href="https://rollingbankjt.netlify.app/" target="_blank">
                            <img src={banco} alt="rollingbank" className="pb-4 img-fluid" />
                        </a>
                        <a
                            href="https://rollingbankjt.netlify.app/"
                            target="_blank"
                            className="text-lg font-medium pt-8 pb-2 text-white d-block"
                        >
                            RollingBank
                        </a>
                        <p className="py-2 text-white text-justify">
                            Esta página presenta un banco virtual, con una barra de navegación que permite explorar varias opciones como información sobre precios, seguridad, y servicios ofrecidos. Además, incluye secciones detalladas que explican los beneficios, las políticas de mantenimiento, las transferencias, el pago de servicios, y más, brindando una experiencia accesible y completa al usuario.
                        </p>
                        <h4 className="py-4 text-teal-600 text-white">Herramientas de trabajo:</h4>
                        <div className="d-flex justify-content-center gap-3 text-3xl py-4">
                            <FaHtml5 className="text-white icon" />
                            <FaCss3 className="text-white icon" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 text-center shadow-lg rounded-xl p-2" data-aos="flip-right">
                        <a href="https://rollingbankjt.netlify.app/" target="_blank">
                            <img src={clima} alt="appclima" className="pb-4 img-fluid" />
                        </a>
                        <a
                            href="https://rollingbankjt.netlify.app/"
                            target="_blank"
                            className="text-lg font-medium pt-8 pb-2 text-white d-block"
                        >
                            Clima App
                        </a>
                        <p className="py-2 text-white text-justify">
                        App del Clima, esta aplicación proporciona pronósticos meteorológicos precisos y actualizados. Consume una API del pronóstico mundial para ofrecer a los usuarios información sobre el clima en tiempo real, incluyendo temperatura, condiciones atmosféricas y previsiones extendidas.
                        </p>
                        <h4 className="py-4 text-teal-600 text-white">Herramientas de trabajo:</h4>
                        <div className="d-flex justify-content-center gap-3 text-3xl py-4">
                            <FaHtml5 className="text-white icon" />
                            <FaCss3 className="text-white icon" />
                            <FaJs className="text-white icon" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 text-center shadow-lg rounded-xl p-2" data-aos="flip-left">
                        <a href="https://github.com/juantoranzos/proyectoFinalReactAdv" target="_blank">
                            <img src={sge} alt="Petshop" className="pb-4 img-fluid" />
                        </a>
                        <a
                            href="https://github.com/juantoranzos/proyectoFinalReactAdv"
                            target="_blank"
                            className="text-lg font-medium pt-8 pb-2 text-white d-block"
                        >
                            Sistema de Gestión Educativa
                        </a>
                        <p className="py-2 text-white text-justify">
                            Proyecto final del curso avanzado de React en RollingCode <br />
                            Desarrollo de un sistema de gestión educativa con múltiples funcionalidades: administración de usuarios, gestión de cursos, asignaturas, horarios, asistencias, calificaciones y novedades. Implementa Zustand para la gestión de estado global.
                        </p>
                        <h4 className="py-4 text-white">Herramientas de trabajo:</h4>
                        <div className="d-flex justify-content-center gap-3 text-3xl py-4">
                            <FaHtml5 className="text-white icon" />
                            <FaCss3 className="text-white icon" />
                            <FaBootstrap className="text-white icon" />
                            <FaReact className="text-white icon" />
                            <FaJs className="text-white icon" />
                        </div>
                    </div>
                   
                    <div className="col-12 col-md-6 text-center shadow-lg rounded-xl p-2" data-aos="flip-right">
                        <a href="https://github.com/juantoranzos/proyectoFinalReactAdv" target="_blank">
                            <img src={guay} alt="guay" className="pb-4 img-fluid" />
                        </a>
                        <a
                            href="https://construccionescivilesguaymas.netlify.app/"
                            target="_blank"
                            className="text-lg font-medium pt-8 pb-2 text-white d-block"
                        >
                            Guaymás Construcciones
                        </a>
                        <p className="py-2 text-white text-justify">
                        Diseñada para presentar los servicios y proyectos de una empresa minera, esta landing page combina un diseño atractivo y funcional. Utiliza las ultimas tecnologías para ofrecer una experiencia de usuario intuitiva, con secciones informativas sobre la empresa, sus proyectos y el impacto en la comunidad. Ideal para captar la atención de clientes potenciales y socios estratégicos.
                        </p>
                        <h4 className="py-4 text-white">Herramientas de trabajo:</h4>
                        <div className="d-flex justify-content-center gap-3 text-3xl py-2">
                            <FaHtml5 className="text-white icon" />
                            <FaCss3 className="text-white icon" />
                            <FaBootstrap className="text-white icon" />
                            <FaReact className="text-white icon" />
                            <BiLogoTypescript className="text-white icon" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
