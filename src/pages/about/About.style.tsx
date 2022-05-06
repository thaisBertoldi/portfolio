import styled from "styled-components";
import img from "../../images/purple-bg.jpg";
import { Theme } from "../../theme";

export const FirstContainer = styled.div`
  display: grid;
  grid-template-columns: 30% auto;
  justify-content: center;
  height: 600px;
  background: url(${img}) top;
  background-size: 100%;
  align-items: center;
`;

export const SecContainer = styled.div`
  background: #919bf3;
  display: flex;
  padding: 2% 25%;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const TercContainer = styled.div`
  background: #919bf3;
`;

export const ImgCustom = styled.img<{radius: string, width: string}>`
  border-radius: ${props => props.radius};
  width: ${props => props.width};
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

export const DivTitles = styled.div`
  display: flex;
  background: url(${img}) left;
  color: white;
  padding: 0 50px;
`;

export const TitleSection = styled.h2`
  color: white;
`;

