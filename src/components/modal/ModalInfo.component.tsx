import { BtnClose, ContainerModal, Modal } from "./Modal.style";
import { AiFillCloseCircle } from "react-icons/ai";

const ModalInfo = () => {
  return (
    <ContainerModal>
      <Modal>
      <BtnClose> <AiFillCloseCircle /> </BtnClose>
      </Modal>
    </ContainerModal>
  );
};

export default ModalInfo;
