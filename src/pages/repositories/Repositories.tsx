import { useState } from 'react'
import ModalRepositories from '../../components/modalRepositories/ModalRepositories';
import Projects from '../../components/projects/Projects';
import { Btn } from '../../globalStyles.style';
import { ContainerRepos, DivButton } from './Repositories.style';

function Repositories() {
  const [isAllRepos, setIsAllRepos] = useState(false);

  return (
    <ContainerRepos>
      <DivButton>
        <Btn width={'500px'} onClick={() => setIsAllRepos(true)}>Clique aqui para ver todos os repositórios</Btn>
      </DivButton>
      <Projects />
      {isAllRepos && (
        <ModalRepositories onClick={() => setIsAllRepos(false)} />
      )}
    </ContainerRepos>
  )
}

export default Repositories