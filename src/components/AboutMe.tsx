import { Col, Container, Row } from "react-bootstrap"
import { PersonalDate } from "./PersonalDate"
import { Intereses } from "./Intereses"
import { LinkGit } from "./LinkGit"
import { Me } from "./Me"
import { Habilidades } from "./Habilidades"
import traducciones from "../helpers/traduccion"
import useLangStore from '../store/langStore';


export const AboutMe = () => {
  const {language}:any = useLangStore()
    return (
        <section>
            <div className="container py-5 justify-content-center text-center align-items-center" data-aos="fade-up">

                <h1 className='text-center  p-2 text-info font-weight-bold m-3 fs-1 nombre ' >Juan Toranzos</h1>
                <h2 className="text-center p-3 fs-2 text-info " >{traducciones[language].titulo}</h2>
                <div className="d-flex align-items-center justify-content-center">

                <p className=" text-white text-justify mx-auto my-3 fs-5 w-75 w-md-50 description">
                    {traducciones[language].sobremi}
                </p>
                </div>
                <br />
                <LinkGit />
            </div>
            <Me></Me>
            <Habilidades />
          <div>
            <Container className="py-5">
                  <Row>
                    <Col md={6} className="d-flex align-items-center justify-content-center">
                    <PersonalDate />
                    </Col>
                    <Col md={6} className="d-flex align-items-center justify-content-center">    
                       <Intereses />
                    </Col>
                    </Row>
            </Container>
          </div>
        </section>
    )
}
