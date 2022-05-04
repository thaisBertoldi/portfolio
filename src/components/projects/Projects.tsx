import projetoFinal from "../../images/projeto-final.gif";
import pokedex from "../../images/pokedex.gif";
import nytimes from "../../images/nytimes.gif";
import crud from "../../images/crud.gif";
import linkedin from "../../images/linkedin.gif";
import landingpage from "../../images/landingpage.gif";
import { Card, ContainerProjects } from "./Projects.style";
import { TitleGradient } from "../../globalStyles.style";

function Projects() {
  return (
    <ContainerProjects>
      <Card>
        <TitleGradient>Sistema de compras:</TitleGradient>
        <img src={projetoFinal} alt="Páginas do projeto Sistema de compras" />
      </Card>
      <Card>
        <TitleGradient>Pokedex:</TitleGradient>
        <img src={pokedex} alt="Páginas do projeto Pokedex" />
      </Card>
      <Card>
        <TitleGradient>New York Times:</TitleGradient>
        <img src={nytimes} alt="Páginas do projeto New York Times" />
      </Card>
      <Card>
        <TitleGradient>Crud Completo:</TitleGradient>
        <img src={crud} alt="Páginas do projeto Crud Completo" />
      </Card>
      <Card>
        <TitleGradient>Linkedin:</TitleGradient>
        <img src={linkedin} alt="Páginas do projeto Linkedin" />
      </Card>
      <Card>
        <TitleGradient>"Landing Page" com CSS:</TitleGradient>
        <img src={landingpage} alt="Páginas do projeto Landing Page" />
      </Card>
    </ContainerProjects>
  );
}

export default Projects;
