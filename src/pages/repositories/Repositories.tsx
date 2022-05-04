import { useState } from 'react'
import ModalRepositories from '../../components/modalRepositories/ModalRepositories';

function Repositories() {
  const [isAllRepos, setIsAllRepos] = useState(false);

  return (
    <div>
      <button onClick={() => setIsAllRepos(true)}>Clique aqui para ver todos os repositórios</button>
      {isAllRepos && (
        <ModalRepositories onClick={() => setIsAllRepos(false)} />
      )}
    </div>
  )
}

export default Repositories