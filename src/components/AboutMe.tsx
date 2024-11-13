import { Col, Container, Row } from "react-bootstrap"
import { PersonalDate } from "./PersonalDate"
import { Intereses } from "./Intereses"
import { LinkGit } from "./LinkGit"
import { Me } from "./Me"
import { Habilidades } from "./Habilidades"

export const AboutMe = () => {
    return (
        <section className="">
            <div className="container py-5 justify-content-center text-center align-items-center" data-aos="fade-up">

                <h1 className='text-center text-white p-2 font-weight-bold m-3 fs-1 ' >Juan Toranzos</h1>
                <h2 className="text-center text-white p-3 fs-2 " >Full Stack Web Developer</h2>
                <div className="d-flex align-items-center justify-content-center">

                <p className=" text-white text-justify mx-auto my-3 fs-5 w-75 w-md-50 description">
                    Hola, Soy Juan, un apasionado programador. Actualmente me dedico al desarrollo Full Stack con una solida experiencia en la creacion y diseño de paginas Web completas y eficientes. Mi enfoque se centra en FrontEnd y BackEnd para ofrecer la mejor solucion posible.💻
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
