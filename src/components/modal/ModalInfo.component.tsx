import { AiFillCloseCircle } from "react-icons/ai";
import { ModalComponentDTO } from "../../models/ModalComponentDTO";
import { BtnClose, ContainerModal, Modal } from "./Modal.style";
import "./Modal.css";

const ModalInfo = ({ onClick, id }: ModalComponentDTO) => {
  return (
    <ContainerModal>
      <Modal>
        <BtnClose onClick={onClick}>
          <AiFillCloseCircle />{" "}
        </BtnClose>
        <div className="col-six tab-full">
          <ul className="skill-bars">
            <li>
              <div className="progress">
                <span>94%</span>
              </div>
              <strong>Java</strong>
            </li>
            <li>
              <div className="progress">
                <span>95%</span>
              </div>
              <strong>Javascript/Typescript</strong>
            </li>
            <li>
              <div className="progress">
                <span>93%</span>
              </div>
              <strong>HTML/CSS</strong>
            </li>
            <li>
              <div className="progress">
                <span>99%</span>
              </div>
              <strong>Spring</strong>
            </li>
            <li>
              <div className="progress">
                <span>88%</span>
              </div>
              <strong>Android</strong>
            </li>
            <li>
              <div className="progress">
                <span>86%</span>
              </div>
              <strong>React</strong>
            </li>
            <li>
              <div className="progress">
                <span>90%</span>
              </div>
              <strong>Angular</strong>
            </li>
          </ul>
        </div>
      </Modal>
    </ContainerModal>
  );
};

export default ModalInfo;
