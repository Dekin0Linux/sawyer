import { Modal, Button, ButtonToolbar, Placeholder } from "rsuite";



const DepositModal = ({ openModal, closeModal }) => {
    return (
      <>
        <Modal open={openModal} onClose={closeModal}>
          <Modal.Header>
            <Modal.Title>Deposit Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Placeholder.Paragraph />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={closeModal} appearance="primary">
              Ok
            </Button>
            <Button onClick={closeModal} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  export default DepositModal