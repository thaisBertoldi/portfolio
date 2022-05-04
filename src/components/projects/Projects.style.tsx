import styled from "styled-components";
import img from "../../images/purple-bg.jpg";

export const ContainerProjects = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 15px;
  background-color: #fff;
  border-radius: 15px;
  padding-bottom: 20px;
  -webkit-box-shadow: 0px 1px 31px 2px #351d66;
  box-shadow: 0px 1px 31px 2px #351d66;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  :hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    background: url(${img});
    h2 {
      background-image: linear-gradient(to bottom, #ffffff, #b693fc, #f4dafd);
      color: white;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;