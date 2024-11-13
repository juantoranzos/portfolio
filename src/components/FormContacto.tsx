import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const FormContacto = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cjg2q64', 'template_uedy7nm', form.current, {
        publicKey: 'NcdYBZ3aGRd97OHdm',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          handleCloseModal();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="modal-show" style={{ display: 'block', position: 'initial' }} >
      <Button variant="dark" onClick={handleShowModal}>
       Contacto
      </Button>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contactate conmigo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form  ref={form} onSubmit={sendEmail} data-aos="fade-down">
            <input type="text" placeholder='Ingresa tu nombre' className='form-control m-auto w-50 p-2 mb-2' name='user_name' />
            <input type="email" placeholder='Ingresa tu email' className='form-control m-auto w-50 p-2 mb-2' name='user_email'/>
            <input type="text" placeholder='Asunto' className='form-control m-auto w-50 p-2 mb-2'  name='subject'/>
            <textarea name="message" id="mensaje" placeholder='Escribe tu mensaje aqui' className='form-control m-auto w-50 p-2 mb-2'></textarea>
            <div className='text-center'>
            <input type="submit" value="Send" className='btn btn-dark' />
            </div>

          </form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
