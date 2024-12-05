import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import traducciones from "../helpers/traduccion"
import useLangStore from '../store/langStore';
export const Habilidades = () => {
  const {language}:any = useLangStore()
    return (
        <section className="container p-5" data-aos="fade-up">
        <h2 className="text-center text-info font-weight-bold mb-4">
          {traducciones[language].stack}
        </h2>
        
        <article className="container" data-aos="fade-up">
          <Row className="text-center g-4">
            <Col xs={6} md={4} lg={2}>
              <FaJs className="icon" />
            </Col>
            <Col xs={6} md={4} lg={2}>
            <BiLogoTypescript   className="icon" />
            </Col>
            <Col xs={6} md={4} lg={2}>
              <FaReact className="icon" />
            </Col>
            <Col xs={6} md={4} lg={2}>
              <SiRedux className="icon" />
            </Col>
            <Col xs={6} md={4} lg={2}>
              <FaBootstrap className="icon" />
            </Col>
            <Col xs={6} md={4} lg={2}>
              <FaNodeJs className="icon" />
            </Col>
            <Col xs={6} md={4} lg={2}>
              <SiMongodb className="icon" />
            </Col>
            <Col xs={6} md={4} lg={2}>
            <BiLogoPostgresql className="icon"  />
            </Col>
            <Col xs={6} md={4} lg={2}>
              <FaGit className="icon" />
            </Col>
            <Col xs={6} md={4} lg={2}>
              <FaGithub className="icon" />
            </Col>
          </Row>
        </article>
      </section>
    )
}
