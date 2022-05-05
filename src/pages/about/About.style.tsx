import styled from "styled-components";
import img from "../../images/purple-bg.jpg";
import imgInvert from "../../images/purple-bg-invert.jpg";

export const FirstContainer = styled.div`
  display: grid;
  grid-template-columns: 30% auto;
  justify-content: center;
  height: 700px;
  background: url(${img});
  background-size: 100%;
  align-items: center;
`;

export const SecContainer = styled.div`
  background: url(${imgInvert});
`;

export const ImgCustom = styled.img`
  border-radius: 50%;
`;

export const TitlePrincipal = styled.h1`
  color: white;
  font-size: 50px;
  line-height: 30px;
`;

export const Bio = styled.h2`
  color: white;
`;

export const BtnDiv = styled.div`
  display: flex;
  gap: 15px;
`;
