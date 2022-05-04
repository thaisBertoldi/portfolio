import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { ModalRepositoriesDTO } from "../../models/AllDTOs";
import { ContainerModal, Modal } from "./ModalRepositores.style";

const ModalRepositories = ({ onClick }: ModalRepositoriesDTO) => {
  const { dataRepos } = useContext<any>(UserContext);

  return (
    <ContainerModal>
      <Modal>
        {dataRepos.map((el: any) => {
            return (
                <p>{el.name}</p>
            )
        })}
        <button onClick={onClick}>Fechar</button>
      </Modal>
    </ContainerModal>
  );
};

export default ModalRepositories;
