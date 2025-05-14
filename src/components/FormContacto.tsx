import { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export const FormContacto = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mkgrkrnq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Ocurrió un error al enviar el formulario.");
    }
  };


 
  return (
    <div className="modal-show" style={{ display: 'block', position: 'initial' }}>
      <Button variant="outline-light" onClick={handleShowModal}>
        Contacto
      </Button>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contactate conmigo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} data-aos="fade" action="https://formspree.io/f/mkgrkrnq"
  method="POST">
            <input type="text" placeholder="Ingresa tu nombre" className="form-control m-auto w-50 p-2 mb-2" name="name" required value={formData.name} onChange={handleChange} />
            <input type="email" placeholder="Ingresa tu email" className="form-control m-auto w-50 p-2 mb-2" name="email"  required value={formData.email} onChange={handleChange}/>
            <textarea name="message" id="mensaje" placeholder="Escribe tu mensaje aqui" className="form-control m-auto w-50 p-2 mb-2" required value={formData.message} onChange={handleChange}></textarea>
            <div className="text-center">
              <input type="submit" value="Send" className="btn btn-dark" />
            </div>
            {success && <p className="mt-4 text-green-600 text-center">¡Mensaje enviado correctamente!</p>}
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};
