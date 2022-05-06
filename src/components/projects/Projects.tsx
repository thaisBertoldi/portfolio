import projetoFinal from "../../images/projeto-final.gif";
import pokedex from "../../images/pokedex.gif";
import nytimes from "../../images/nytimes.gif";
import crud from "../../images/crud.gif";
import linkedin from "../../images/linkedin.gif";
import landingpage from "../../images/landingpage.gif";
import { Card, ContainerProjects, DivIcons, DivTech } from "./Projects.style";
import { ACustom, Paragraph, TitleGradient } from "../../globalStyles.style";
import {
  SiTypescript,
  SiReact,
  SiRedux,
  SiStyledcomponents,
  SiJavascript,
  SiCss3,
  SiHtml5,
} from "react-icons/si";

function Projects() {
  return (
    <ContainerProjects>
      <Card>
        <TitleGradient size={"20px"}>Sistema de compras:</TitleGradient>
        <img src={projetoFinal} alt="Páginas do projeto Sistema de compras" />
        <DivTech>
          <Paragraph>Tecnologias utilizadas nesse projeto: </Paragraph>
          <DivIcons>
            <SiTypescript />
            <SiReact />
            <SiRedux />
            <SiStyledcomponents />
          </DivIcons>
          <ACustom href="https://github.com/thaisBertoldi/trabalhoFinalVemSerDBC">Clique aqui para ver o código</ACustom>
        </DivTech>
      </Card>
      <Card>
        <TitleGradient size={"20px"}>Pokedex:</TitleGradient>
        <img src={pokedex} alt="Páginas do projeto Pokedex" />
        <DivTech>
          <Paragraph>Tecnologias utilizadas nesse projeto: </Paragraph>
          <DivIcons>
            <SiTypescript />
            <SiReact />
            <SiRedux />
            <SiStyledcomponents />
          </DivIcons>
          <ACustom href="https://github.com/thaisBertoldi/pokedexReduxVemSerDBC">Clique aqui para ver o código</ACustom>
        </DivTech>
      </Card>
      <Card>
        <TitleGradient size={"20px"}>New York Times:</TitleGradient>
        <img src={nytimes} alt="Páginas do projeto New York Times" />
        <DivTech>
          <Paragraph>Tecnologias utilizadas nesse projeto: </Paragraph>
          <DivIcons>
            <SiJavascript />
            <SiReact />
            <SiStyledcomponents />
          </DivIcons>
          <ACustom href="https://github.com/thaisBertoldi/trabalhoNYTimesVemSerDBC">Clique aqui para ver o código</ACustom>
        </DivTech>
      </Card>
      <Card>
        <TitleGradient size={"20px"}>Crud Completo:</TitleGradient>
        <img src={crud} alt="Páginas do projeto Crud Completo" />
        <DivTech>
          <Paragraph>Tecnologias utilizadas nesse projeto: </Paragraph>
          <DivIcons>
            <SiJavascript />
            <SiReact />
            <SiStyledcomponents />
          </DivIcons>
          <ACustom href="https://github.com/thaisBertoldi/crud-vemser">Clique aqui para ver o código</ACustom>
        </DivTech>
      </Card>
      <Card>
        <TitleGradient size={"20px"}>Linkedin:</TitleGradient>
        <img src={linkedin} alt="Páginas do projeto Linkedin" />
        <DivTech>
          <Paragraph>Tecnologias utilizadas nesse projeto: </Paragraph>
          <DivIcons>
            <SiCss3 />
            <SiHtml5 />
          </DivIcons>
          <ACustom href="https://github.com/thaisBertoldi/exercicio-linkedin">Clique aqui para ver o código</ACustom>
        </DivTech>
      </Card>
      <Card>
        <TitleGradient size={"20px"}>"Landing Page" com CSS:</TitleGradient>
        <img src={landingpage} alt="Páginas do projeto Landing Page" />
        <DivTech>
          <Paragraph>Tecnologias utilizadas nesse projeto: </Paragraph>
          <DivIcons>
            <SiCss3 />
            <SiHtml5 />
          </DivIcons>
          <ACustom href="https://github.com/thaisBertoldi/vemserdbc-aulas/tree/main/homeworkPaginaSiteCarnaval">Clique aqui para ver o código</ACustom>
        </DivTech>
      </Card>
    </ContainerProjects>
  );
}

export default Projects;
