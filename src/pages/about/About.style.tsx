import styled from "styled-components";
import img from '../../images/purple-bg.jpg'
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

export const Btn = styled.button<{ width: string }>`
  width: ${(props) => props.width};
  height: 42px;
  background: ${(props) => props.color};
  border-radius: 4px;
  outline: none;
  border: none;
  color: ${Theme.color.purpleDark};
  cursor: pointer;
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500&display=swap');
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  :hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const BtnDiv = styled.div`
    display: flex;
    gap: 15px;
`;