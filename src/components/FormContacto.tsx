
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export const FormContacto = () => {
  handleCloseModal = () => setShowModal(false);
  handleShowModal = () => setShowModal(true);

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="modal-show" style={{ display: 'block', position: 'initial' }}>
      <h2 className="text-center text-white p-2 font-weight-bold m-3 fs-1 ">Dejame tu consulta, estamos en contacto</h2>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Información Adicional</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Este es el contenido del modal. Puedes personalizarlo según tus necesidades.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
