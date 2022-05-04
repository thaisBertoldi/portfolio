import React from "react";
import { Card, ContainerSkills, Img} from "./Skills.style";
import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import react from "../../images/react.png";
import ts from "../../images/ts.png";
import redux from "../../images/Redux.png";
import { TitleGradient } from "../../globalStyles.style";

function Skills() {
  return (
    <ContainerSkills>
      <Card>
        <Img src={html} alt="logo html" />
        <TitleGradient>HTML</TitleGradient>
      </Card>
      <Card>
        <Img src={css} alt="logo css" />
        <TitleGradient>CSS</TitleGradient>
      </Card>
      <Card>
        <Img src={js} alt="logo js" />
        <TitleGradient>Javascript</TitleGradient>
      </Card>
      <Card>
        <Img src={ts} alt="logo ts" />
        <TitleGradient>Typescript</TitleGradient>
      </Card>
      <Card>
        <Img src={react} alt="logo react" />
        <TitleGradient>React</TitleGradient>
      </Card>
      <Card>
        <Img src={redux} alt="logo redux" />
        <TitleGradient>Redux</TitleGradient>
      </Card>
    </ContainerSkills>
  );
}

export default Skills;
