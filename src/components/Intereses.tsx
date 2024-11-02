
import { FaPlane, FaLaptopCode, FaCode, FaBook, FaUtensils, FaFutbol } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
export const Intereses = () => {
  return (
    <Container className="text-center my-4" id="intereses" data-aos="fade-up">
      <h2 className="mb-4 text-uppercase text-white">Mis Intereses</h2>
      <Row className="justify-content-center">
        <Col xs={6} md={4} lg={2} className="mb-3">
          <FaPlane id='iconos' size={50} />
          <p className='text-white' id='texto'>Viajar</p>
        </Col>
        <Col xs={6} md={4} lg={2} className="mb-3">
          <FaLaptopCode id='iconos' size={50} />
          <p className='text-white' id='texto'>Tecnología</p>
        </Col>
        <Col xs={6} md={4} lg={2} className="mb-3">
          <FaFutbol id='iconos' size={50} />
          <p className='text-white' id='texto'>Deporte</p>
        </Col>
        <Col xs={6} md={4} lg={2} className="mb-3">
          <FaCode id='iconos' size={50} />
          <p className='text-white' id='texto'>Codear</p>
        </Col>
        <Col xs={6} md={4} lg={2} className="mb-3">
          <FaBook id='iconos' size={50} />
          <p className='text-white' id='texto'>Libros</p>
        </Col>
        <Col xs={6} md={4} lg={2} className="mb-3">
          <FaUtensils id='iconos' size={50} />
          <p className='text-white' id='texto'>Comida</p>
        </Col>
      </Row>
    </Container>
  )
}
