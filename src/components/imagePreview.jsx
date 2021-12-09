import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { useParams } from "react-router";

const Image = ({ data, previewClose }) => {
  return (
    <div>
      <Modal isOpen size="lg">
        <ModalHeader toggle={previewClose}>{data.title}</ModalHeader>
        <ModalBody>
          <img src={data.url} alt={data.title} />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Image;
