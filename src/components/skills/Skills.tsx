import React from "react";
import { Card, ContainerSkills, Img } from "./Skills.style";
import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import react from "../../images/react.png";
import ts from "../../images/ts.png";
import redux from "../../images/Redux.png";

function Skills() {
  return (
    <ContainerSkills>
      <Card>
        <Img src={html} alt="logo html" />
        <h1>HTML</h1>
      </Card>
      <Card>
        <Img src={css} alt="logo css" />
        <h1>CSS</h1>
      </Card>
      <Card>
        <Img src={js} alt="logo js" />
        <h1>Javascript</h1>
      </Card>
      <Card>
        <Img src={ts} alt="logo ts" />
        <h1>Typescript</h1>
      </Card>
      <Card>
        <Img src={react} alt="logo react" />
        <h1>React</h1>
      </Card>
      <Card>
        <Img src={redux} alt="logo redux" />
        <h1>Redux</h1>
      </Card>
    </ContainerSkills>
  );
}

export default Skills;
