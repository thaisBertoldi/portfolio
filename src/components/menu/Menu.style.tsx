import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerMenu = styled.div`
  display: flex;
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
  :hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
