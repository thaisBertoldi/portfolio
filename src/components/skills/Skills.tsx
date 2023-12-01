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
import { Card, ContainerSkills, Img, SlideTrack } from "./Skills.style";

function Skills() {
  return (
    <ContainerSkills>
      <SlideTrack>
        <Card>
          <Img src={java} alt="logo java" />
          <TitleGradient size={"15px"}>JAVA</TitleGradient>
        </Card>
        <Card>
          <Img src={spring} alt="logo spring" />
          <TitleGradient size={"15px"}>Spring</TitleGradient>
        </Card>
        <Card>
          <Img src={android} alt="logo android" />
          <TitleGradient size={"15px"}>Android</TitleGradient>
        </Card>
        <Card>
          <Img src={webflux} alt="logo webflux" />
          <TitleGradient size={"15px"}>Webflux</TitleGradient>
        </Card>
        <Card>
          <Img src={html} alt="logo html" />
          <TitleGradient size={"15px"}>HTML</TitleGradient>
        </Card>
        <Card>
          <Img src={css} alt="logo css" />
          <TitleGradient size={"15px"}>CSS</TitleGradient>
        </Card>
        <Card>
          <Img src={js} alt="logo js" />
          <TitleGradient size={"15px"}>Javascript</TitleGradient>
        </Card>
        <Card>
          <Img src={ts} alt="logo ts" />
          <TitleGradient size={"15px"}>Typescript</TitleGradient>
        </Card>
        <Card>
          <Img src={react} alt="logo react" />
          <TitleGradient size={"15px"}>React</TitleGradient>
        </Card>
        <Card>
          <Img src={angular} alt="logo angular" />
          <TitleGradient size={"15px"}>Angular</TitleGradient>
        </Card>
        <Card>
          <Img src={redux} alt="logo redux" />
          <TitleGradient size={"15px"}>Redux</TitleGradient>
        </Card>
        <Card>
          <Img src={mysql} alt="logo mysql" />
          <TitleGradient size={"15px"}>MySQL</TitleGradient>
        </Card>
        <Card>
          <Img src={mongoDB} alt="logo mongoDB" />
          <TitleGradient size={"15px"}>MongoDB</TitleGradient>
        </Card>
        <Card>
          <Img src={node} alt="logo node" />
          <TitleGradient size={"15px"}>NodeJS</TitleGradient>
        </Card>
        <Card>
          <Img src={sass} alt="logo sass" />
          <TitleGradient size={"15px"}>Sass</TitleGradient>
        </Card>
        <Card>
          <Img src={styled} alt="logo styled" />
          <TitleGradient size={"15px"}>Styled Components</TitleGradient>
        </Card>
      </SlideTrack>
    </ContainerSkills>
  );
}

export default Skills;
