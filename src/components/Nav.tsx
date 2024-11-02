import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Navegacion = () => {
  return (
    <>

      <Navbar expand="lg"  className="py-3">
        <div className="  container navegacion p-2 ">
          <Navbar.Brand href="#home" className="fw-bold text-white p-2 m-2 ">CodeByJuan</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="ml-auto">
             <button className='btn btn-outline-light - p-2 m-2' id='contacto'>Contacto</button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

    </>
  )
}