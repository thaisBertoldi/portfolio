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
        <TitleGradient size={'20px'}>HTML</TitleGradient>
      </Card>
      <Card>
        <Img src={css} alt="logo css" />
        <TitleGradient size={'20px'}>CSS</TitleGradient>
      </Card>
      <Card>
        <Img src={js} alt="logo js" />
        <TitleGradient size={'20px'}>Javascript</TitleGradient>
      </Card>
      <Card>
        <Img src={ts} alt="logo ts" />
        <TitleGradient size={'20px'}>Typescript</TitleGradient>
      </Card>
      <Card>
        <Img src={react} alt="logo react" />
        <TitleGradient size={'20px'}>React</TitleGradient>
      </Card>
      <Card>
        <Img src={redux} alt="logo redux" />
        <TitleGradient size={'20px'}>Redux</TitleGradient>
      </Card>
    </ContainerSkills>
  );
}

export default Skills;
