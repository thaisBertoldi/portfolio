import styled from "styled-components";
import img from "../../images/background.jpg";
import { Theme } from "../../theme";

export const ContainerProjects = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-content: center;
  padding: 10px;

  & > div {
    flex-shrink:  0;
  }
  gap: 15px;
  margin: 10px;
  &::-webkit-scrollbar {
    height: 30px;
    background: gray;
  }
  &::-webkit-scrollbar-thumb:horizontal{
        background: #2f4dc7;
        border-radius: 10px;
    }
  @media (max-width: 1360px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 1000px) {
    grid-template-columns: auto;
  } 
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 15px;
  background-color: #fff;
  border-radius: 15px;
  padding-bottom: 20px;
  a {
    margin-top: 10px;
  }
  :hover {
    background: url(${img});
    background-size: cover;
    h2 {
      background-image: linear-gradient(to bottom, #ffffff, #e4d9fa, #f4dafd);
      color: white;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p, a, svg {
      color: #f4dafd;
    }
  }
  @media (max-width: 600px) {
    width: 300px;
  }
`;

export const DivTech = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const DivIcons = styled.div`
  display: flex;
  font-size: 50px;
  gap: 15px;
  color: ${Theme.color.purpleDark};
`;

export const DivBackgroundProject = styled.div<{background: string, backgroundHover: string}>`
  background: url(${props => props.background}) center no-repeat;
  height: 200px;
  background-size: 100%;
  :hover {
    background: url(${props => props.backgroundHover}) center no-repeat;
    height: 200px;
    background-size: 100%;
  }
`;