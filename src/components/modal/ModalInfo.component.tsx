import { AiFillCloseCircle } from "react-icons/ai";
import { ModalComponentDTO } from "../../models/ModalComponentDTO";
import { BtnClose, ContainerModal, Modal } from "./Modal.style";

const ModalInfo = ({ onClick, id }: ModalComponentDTO) => {
  return (
    <ContainerModal>
      <Modal>
        <BtnClose onClick={onClick}>
          {" "}
          <AiFillCloseCircle />{" "}
        </BtnClose>
      </Modal>
    </ContainerModal>
  );
};

export default ModalInfo;
