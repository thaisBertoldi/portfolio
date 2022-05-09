import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerMenu = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 50px;
  list-style: none;
`;

export const LinkCustom = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 20px;
`;

export const Item = styled.li`
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  list-style: none;
  :hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;


export const MenuHamburguer = styled.div`
  color: white;
  font-size: 20px;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    padding-left: 75%;
  }
`;

export const HamburguerDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 8%;
  a {
    color: #dde2ff;
    text-decoration: none; 
    padding-left: 70%;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;