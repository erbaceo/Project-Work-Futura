import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import OrderForm from './OrderForm';

function OrderModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="btn btn-secondary" onClick={handleShow}>
        Aggiungi ordine
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        data-bs-theme="dark"
      >
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi Ordine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <OrderForm
            setFormAlert={props.setFormAlert}
            closeModal={handleClose}
            onOrderCreated={props.onOrderCreated}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default OrderModal;