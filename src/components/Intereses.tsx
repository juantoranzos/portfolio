
import { FaPlane, FaLaptopCode, FaCode, FaBook, FaUtensils, FaFutbol } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import traducciones from "../helpers/traduccion"
import useLangStore from '../store/langStore';

export const Intereses = () => {
  const {language}:any = useLangStore()
  return (
    <Container className="text-center my-4" id="intereses" data-aos="fade-up">
      <h2 className="mb-4 text-uppercase text-info">{traducciones[language].intereses}</h2>
      <Row className="justify-content-center">
        <Col xs={6} md={4} lg={2} className="mb-3">
          <FaPlane size={50} color='white' />
          <p className='text-white' id='texto'>Viajar</p>
        </Col>
        <Col xs={6} md={4} lg={2} className="mb-3">
          <FaLaptopCode  size={50} color='white' />
          <p className='text-white' id='texto'>Tecnología</p>
        </Col>
        <Col xs={6} md={4} lg={2} className="mb-3">
          <FaFutbol  size={50} color='white' />
          <p className='text-white' id='texto'>Deporte</p>
        </Col>
        <Col xs={6} md={4} lg={2} className="mb-3">
          <FaCode size={50} color='white' />
          <p className='text-white' id='texto'>Codear</p>
        </Col>
        <Col xs={6} md={4} lg={2} className="mb-3">
          <FaBook  size={50} color='white' />
          <p className='text-white' id='texto'>Libros</p>
        </Col>
        <Col xs={6} md={4} lg={2} className="mb-3">
          <FaUtensils size={50} color='white' />
          <p className='text-white' id='texto'>Comida</p>
        </Col>
      </Row>
    </Container>
  )
}
