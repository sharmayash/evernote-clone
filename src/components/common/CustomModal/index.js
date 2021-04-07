import React from "react";
import { Button, Modal } from "react-bootstrap";

const CustomModal = ({ show, handleClose, handleSubmit }) => {
  return (
    <Modal
      centered
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Delete Note Permanently ?</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button size="sm" variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button size="sm" variant="danger" onClick={handleSubmit}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
