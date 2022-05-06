import styled from "styled-components";
import img from "../../images/purple-bg.jpg";
import { Theme } from "../../theme";

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
  background: ${Theme.color.purpleLight};
  display: flex;
  padding: 0 25%;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const TercContainer = styled.div`
  background: ${Theme.color.purpleLight};
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
  background-color: ${Theme.color.purpleDark};
  color: white;
  padding: 0 50px;
`;

export const TitleSection = styled.h2`
  color: white;
`;

