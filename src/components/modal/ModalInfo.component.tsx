import { AiFillCloseCircle } from "react-icons/ai";
import { ModalComponentDTO } from "../../models/ModalComponentDTO";
import { BtnClose, ContainerModal, Modal, Percent } from "./Modal.style";
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
              <Percent width={"80%"} className="progress">
                <span>80%</span>
              </Percent>
              <strong>Java</strong>
            </li>
            <li>
              <Percent width={"95%"} className="progress">
                <span>95%</span>
              </Percent>
              <strong>Javascript/Typescript</strong>
            </li>
            <li>
              <Percent width={"95%"} className="progress">
                <span>95%</span>
              </Percent>
              <strong>HTML/CSS</strong>
            </li>
            <li>
              <Percent width={"79%"} className="progress">
                <span>79%</span>
              </Percent>
              <strong>Spring</strong>
            </li>
            <li>
              <Percent width={"59%"} className="progress">
                <span>59%</span>
              </Percent>
              <strong>Android</strong>
            </li>
            <li>
              <Percent width={"95%"} className="progress">
                <span>95%</span>
              </Percent>
              <strong>React</strong>
            </li>
            <li>
              <Percent width={"95%"} className="progress">
                <span>95%</span>
              </Percent>
              <strong>Angular</strong>
            </li>
          </ul>
        </div>
      </Modal>
    </ContainerModal>
  );
};

export default ModalInfo;
