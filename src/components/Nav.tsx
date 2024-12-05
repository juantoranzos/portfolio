import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FormContacto } from './FormContacto';
import españa from '../img/banderaespaña.png';
import usa from '../img/icons8-estados-unidos-48.png';
import { Dropdown } from 'react-bootstrap';
import useLangStore from '../store/langStore';
import logo from '../img/desarrollo.png';

export const Navegacion = () => {
    const { language, setLanguage }: any = useLangStore();

    // Determinar la bandera actual basada en el idioma seleccionado
    const currentFlag = language === 'es' ? españa : usa;

    return (
        <>
            <Navbar expand="lg" className="">
                <div className="container navegacion p-2">
                    <Navbar.Brand href="#home" className="fw-bold text-white p-2 m-2">
                        <img src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="flex-row">
                            <FormContacto />
                            <Dropdown>
                                <Dropdown.Toggle variant="">
                                    <img src={currentFlag} alt={language} style={{ width: '22px' }} />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => setLanguage('es')}>
                                        <img src={españa} alt="españa" style={{ width: '22px' }} /> ESPAÑOL
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => setLanguage('en')}>
                                        <img src={usa} alt="usa" style={{ width: '22px' }} /> ENGLISH
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </>
    );
};