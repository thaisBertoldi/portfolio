import styled from "styled-components";

export const LinkCustom = styled.a`
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

export const MenuDiv = styled.div`
    z-index: 2;
`;

export const MenuBar = styled.div`
    width: 45px;
    height: 40px;
    margin: 30px 0 20px 20px;
    cursor: pointer;
`;

export const Bar = styled.div`
    height: 5px;
    width: 100%;
    background-color: #e6e0e0;
    display: block;
    border-radius: 5px;
    transition: 0.3s ease;
`;