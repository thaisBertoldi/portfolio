import styled from "styled-components";
import img from "../../images/background.jpg";
import { Theme } from "../../theme";

export const ContainerProjects = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
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
  -webkit-box-shadow: 0px 1px 20px 1px #201D64;
  box-shadow: 0px 1px 20px 1px #201D64;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  a {
    margin-top: 10px;
  }
  :hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
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
  background: url(${props => props.background});
  height: 200px;
  background-size: cover;
  :hover {
    background: url(${props => props.backgroundHover});
    height: 200px;
    background-size: cover;
  }
`;