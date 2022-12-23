import Projects from "../../components/projects/Projects";
import { DivTitles, TitleSection } from "../about/About.style";
import { ContainerRepos } from "./Repositories.style";

function Repositories() {
  return (
    <ContainerRepos id="repositories">
      <DivTitles>
        <TitleSection>Repositórios</TitleSection>
      </DivTitles>
      <Projects />
    </ContainerRepos>
  );
}

export default Repositories;
