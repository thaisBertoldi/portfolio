import styled from "styled-components";
import img from "./images/purple-bg.jpg";

export const Btn = styled.button<{ width: string, widthMediaQuery:string }>`
  width: ${(props) => props.width};
  height: 42px;
  background: ${(props) => props.color};
  border-radius: 4px;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500&display=swap");
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  :hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    background-image: linear-gradient(to bottom, #2f4dc7, #351d66, #9219be);
  }
  @media (max-width: 600px) {
    width: ${(props) => props.widthMediaQuery};
    font-size: 15px;
  }
`;

export const TitleGradient = styled.h2<{ size: string }>`
  background-image: linear-gradient(to bottom, #2f4dc7, #afa4c5, #f2f0f3);
  color: black;
  font-size: ${(props) => props.size};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Paragraph = styled.p`
  color: ${(props) => props.color};
  font-size: 18px;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

export const ACustom = styled.a`
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
  max-width: 55ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const DivArrowBack = styled.div`
  font-size: 30px;
  color: white;
  position: absolute;
  top: 15px;
  left: 15px;
  cursor: pointer;
`;

export const DivBackground = styled.div`
  background: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const TitlePrincipal = styled.div`
  color: white;
  font-size: 50px;
  @media (max-width: 600px) {
    font-size: 28px;
  }
`;
