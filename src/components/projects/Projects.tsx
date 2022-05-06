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
import { useState } from "react";
import { MainProjects } from "../../service/MainProjects";

function Projects() {

  const [visibilityGif, setVisibilityGif] = useState(false);

  return (
    <ContainerProjects>
      {MainProjects.map((obj: any) => (
        <Card>
          <TitleGradient size={"20px"}>{obj.nome}</TitleGradient>
          {!visibilityGif && (
            <img
              src={obj.imgFixa}
              alt="Primeira pagina do projeto"
              onClick={() => setVisibilityGif(true)}
            />
          )}
          {visibilityGif && (
            <img
              src={obj.imgGif}
              alt="Páginas do projeto Sistema de compras"
              onClick={() => setVisibilityGif(false)}
            />
          )}
          <DivTech>
            <Paragraph>Tecnologias utilizadas nesse projeto: </Paragraph>
            <DivIcons>
              {obj.tecnologias.typescript && <SiTypescript />}
              {obj.tecnologias.javascript && <SiJavascript />}
              {obj.tecnologias.react && <SiReact />}
              {obj.tecnologias.redux && <SiRedux />}
              {obj.tecnologias.styledComp && <SiStyledcomponents />}
              {obj.tecnologias.css && <SiCss3 />}
              {obj.tecnologias.html && <SiHtml5 />}
            </DivIcons>
            <ACustom href={obj.url}>Clique aqui para ver o código</ACustom>
          </DivTech>
        </Card>
      ))}
    </ContainerProjects>
  );
}

export default Projects;
