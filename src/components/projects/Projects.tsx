import { Card, ContainerProjects, DivIcons, DivTech } from "./Projects.style";
import { ACustom, Paragraph, TitleGradient } from "../../globalStyles.style";
import {
  SiCss3,
  SiReact,
  SiRedux,
  SiHtml5,
  SiTypescript,
  SiJavascript,
  SiStyledcomponents,
} from "react-icons/si";
import { useState } from "react";
import { MainProjects } from "../../service/MainProjects";
import { ProjectDTO } from "../../models/AllDTOs";

function Projects() {

  const [visibilityGif, setVisibilityGif] = useState(false);

  return (
    <ContainerProjects>
      {MainProjects.map((project: ProjectDTO, index) => (
        <Card key={index}>
          <TitleGradient size={"20px"}>{project.nome}</TitleGradient>
          {!visibilityGif && (
            <img
              src={project.imgFixa}
              alt="Primeira pagina do projeto"
              onClick={() => setVisibilityGif(true)}
            />
          )}
          {visibilityGif && (
            <img
              src={project.imgGif}
              alt="Páginas do projeto Sistema de compras"
              onClick={() => setVisibilityGif(false)}
            />
          )}
          <DivTech>
            <Paragraph>Tecnologias utilizadas nesse projeto: </Paragraph>
            <DivIcons>
              {project.tecnologias.typescript && <SiTypescript />}
              {project.tecnologias.javascript && <SiJavascript />}
              {project.tecnologias.react && <SiReact />}
              {project.tecnologias.redux && <SiRedux />}
              {project.tecnologias.styledComp && <SiStyledcomponents />}
              {project.tecnologias.css && <SiCss3 />}
              {project.tecnologias.html && <SiHtml5 />}
            </DivIcons>
            <ACustom href={project.url}>Clique aqui para ver o código</ACustom>
          </DivTech>
        </Card>
      ))}
    </ContainerProjects>
  );
}

export default Projects;
