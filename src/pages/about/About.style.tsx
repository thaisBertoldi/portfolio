import styled from "styled-components";
import img from "../../images/purple-bg.jpg";

export const FirstContainer = styled.div`
  display: grid;
  grid-template-columns: auto 30%;
  justify-content: center;
  gap: 30px;
  height: 600px;
  align-items: center;
  @media (max-width: 1200px) {
    grid-template-columns: auto;
  }
`;

export const DivNameButtons = styled.div`
  @media (max-width: 1200px) {
    text-align: center;
  }
`;

export const SecContainer = styled.div`
  background: #919bf3;
  display: flex;
  padding: 2% 25%;
  gap: 10px;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    padding: 5%;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const TercContainer = styled.div`
  background: #919bf3;
`;

export const ImgCustom = styled.img<{radius: string, width: string, displayMedia: string}>`
  border-radius: ${props => props.radius};
  width: ${props => props.width};
  @media (max-width: 1200px) {
    display: ${props => props.displayMedia};
  }
`;

export const Bio = styled.h2`
  color: white;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

export const BtnDiv = styled.div`
  display: flex;
  gap: 15px;
`;

export const DivTitles = styled.div`
  display: flex;
  background: url(${img});
  color: white;
  padding: 0 50px;
`;

export const TitleSection = styled.h2`
  color: white;
`;

