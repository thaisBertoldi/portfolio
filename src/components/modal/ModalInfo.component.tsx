import { AiFillCloseCircle } from "react-icons/ai";
import { ModalComponentDTO } from "../../models/ModalComponentDTO";
import { BtnClose, Column, ContainerModal, Modal, Percent, UlSkill } from "./Modal.style";
import "./Modal.css";

const ModalInfo = ({ onClick, id }: ModalComponentDTO) => {
  return (
    <ContainerModal>
      <Modal>
        <BtnClose onClick={onClick}>
          <AiFillCloseCircle />{" "}
        </BtnClose>
        <Column>
          <UlSkill className="skill-bars">
            <li>
              <Percent width={"80%"} color={"#E41F24"}>
                <span>80%</span>
              </Percent>
              <strong>Java</strong>
            </li>
            <li>
              <Percent width={"95%"} color={"#EFD81D"}>
                <span>95%</span>
              </Percent>
              <strong>Javascript/Typescript</strong>
            </li>
            <li>
              <Percent width={"95%"} color={"#0073BB"}>
                <span>95%</span>
              </Percent>
              <strong>HTML/CSS</strong>
            </li>
            <li>
              <Percent width={"79%"} color={"#6CAE3E"}>
                <span>79%</span>
              </Percent>
              <strong>Spring</strong>
            </li>
            <li>
              <Percent width={"59%"} color={"#9FC037"}>
                <span>59%</span>
              </Percent>
              <strong>Android</strong>
            </li>
            <li>
              <Percent width={"95%"} color={"#5ED3F3"}>
                <span>95%</span>
              </Percent>
              <strong>React</strong>
            </li>
            <li>
              <Percent width={"95%"} color={"#BD002E"}>
                <span>95%</span>
              </Percent>
              <strong>Angular</strong>
            </li>
          </UlSkill>
        </Column>
      </Modal>
    </ContainerModal>
  );
};

export default ModalInfo;
