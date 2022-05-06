import { useState } from "react";
import ModalRepositories from "../../components/modalRepositories/ModalRepositories";
import Projects from "../../components/projects/Projects";
import { Btn, DivArrowBack } from "../../globalStyles.style";
import { ContainerRepos, DivButton } from "./Repositories.style";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Theme } from "../../theme";

function Repositories() {
  const [isAllRepos, setIsAllRepos] = useState(false);
  const navigate = useNavigate()

  return (
    <>
      <DivArrowBack><MdOutlineArrowBackIosNew onClick={() => navigate('/')}/></DivArrowBack>
      <ContainerRepos>
        <DivButton>
          <Btn width={"500px"} onClick={() => setIsAllRepos(true)} color={Theme.color.blueDark}>
            Clique aqui para ver todos os repositórios
          </Btn>
        </DivButton>
        <Projects />
        {isAllRepos && (
          <ModalRepositories onClick={() => setIsAllRepos(false)} />
        )}
      </ContainerRepos>
    </>
  );
}

export default Repositories;
