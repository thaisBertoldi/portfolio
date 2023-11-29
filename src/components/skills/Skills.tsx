import "react-responsive-carousel/lib/styles/carousel.min.css";
import { TitleGradient } from "../../globalStyles.style";
import angular from "../../images/angular.png";
import css from "../../images/css.png";
import html from "../../images/html.png";
import js from "../../images/js.png";
import mongoDB from "../../images/mongo.png";
import mysql from "../../images/mysql.png";
import node from "../../images/nodejs.png";
import react from "../../images/react.png";
import redux from "../../images/Redux.png";
import sass from "../../images/sass.png";
import styled from "../../images/styled.png";
import ts from "../../images/ts.png";
import java from "../../images/java.png";
import spring from "../../images/spring.png";
import android from "../../images/android.png";
import webflux from "../../images/webflux.png";
import { Card, ContainerSkills, Img } from "./Skills.style";
import "./Skills.scss";

function Skills() {
  return (
    <ContainerSkills className="slider">
      <div className="slide-track">
        <Card className="slide">
          <Img src={java} alt="logo java" />
          <TitleGradient size={"15px"}>JAVA</TitleGradient>
        </Card>
        <Card className="slide">
          <Img src={spring} alt="logo spring" />
          <TitleGradient size={"15px"}>Spring</TitleGradient>
        </Card>
        <Card className="slide">
          <Img src={android} alt="logo android" />
          <TitleGradient size={"15px"}>Android</TitleGradient>
        </Card>
        <Card className="slide">
          <Img src={webflux} alt="logo webflux" />
          <TitleGradient size={"15px"}>Webflux</TitleGradient>
        </Card>
        <Card className="slide">
          <Img src={html} alt="logo html" />
          <TitleGradient size={"15px"}>HTML</TitleGradient>
        </Card>
        <Card className="slide">
          <Img src={css} alt="logo css" />
          <TitleGradient size={"15px"}>CSS</TitleGradient>
        </Card>
        <Card className="slide">
          <Img src={js} alt="logo js" />
          <TitleGradient size={"15px"}>Javascript</TitleGradient>
        </Card>
        <Card className="slide">
          <Img src={ts} alt="logo ts" />
          <TitleGradient size={"15px"}>Typescript</TitleGradient>
        </Card>
        <Card className="slide">
          <Img src={react} alt="logo react" />
          <TitleGradient size={"15px"}>React</TitleGradient>
        </Card>
        <Card className="slide">
          <Img src={angular} alt="logo angular" />
          <TitleGradient size={"15px"}>Angular</TitleGradient>
        </Card>
        <Card className="slide">
          <Img src={redux} alt="logo redux" />
          <TitleGradient size={"15px"}>Redux</TitleGradient>
        </Card>
        <Card className="slide">
          <Img src={mysql} alt="logo mysql" />
          <TitleGradient size={"15px"}>MySQL</TitleGradient>
        </Card>
        <Card className="slide">
          <Img src={mongoDB} alt="logo mongoDB" />
          <TitleGradient size={"15px"}>MongoDB</TitleGradient>
        </Card>
        <Card className="slide">
          <Img src={node} alt="logo node" />
          <TitleGradient size={"15px"}>NodeJS</TitleGradient>
        </Card>
        <Card className="slide">
          <Img src={sass} alt="logo sass" />
          <TitleGradient size={"15px"}>Sass</TitleGradient>
        </Card>
        <Card className="slide">
          <Img src={styled} alt="logo styled" />
          <TitleGradient size={"15px"}>Styled Components</TitleGradient>
        </Card>
      </div>
    </ContainerSkills>
  );
}

export default Skills;
