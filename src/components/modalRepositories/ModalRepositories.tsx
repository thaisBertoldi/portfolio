import moment from "moment";
import { useContext } from "react";
import { FaWindowClose } from "react-icons/fa";
import { UserContext } from "../../context/UserContext";
import { ACustom, Paragraph } from "../../globalStyles.style";
import { ModalRepositoriesDTO } from "../../models/AllDTOs";
import { CardRepo, ContainerModal, DivClose, Modal, PDataGit } from "./ModalRepositores.style";

const ModalRepositories = ({ onClick }: ModalRepositoriesDTO) => {
  const { dataRepos } = useContext<any>(UserContext);

  return (
    <ContainerModal>
      <Modal>
        <DivClose>
          <FaWindowClose onClick={onClick}>Fechar</FaWindowClose>
        </DivClose>
        <CardRepo>
          <Paragraph>Nome</Paragraph>
          <Paragraph>URL</Paragraph>
          <Paragraph>Linguagem</Paragraph>
          <Paragraph>Data</Paragraph>
        </CardRepo>
        {dataRepos.map((el: any) => {
            return (
              <CardRepo>
                <PDataGit>{el.name}</PDataGit>
                <ACustom href={el.html_url}>{el.html_url}</ACustom>
                <PDataGit>{el.language}</PDataGit>
                <PDataGit>{moment(el.updated_at, 'YYYY-MM-DD,h:mm:ss').format('DD-MM-YYYY')}</PDataGit>
              </CardRepo>
            )
        })}
      </Modal>
    </ContainerModal>
  );
};

export default ModalRepositories;
