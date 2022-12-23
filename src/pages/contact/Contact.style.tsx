import styled from "styled-components";

export const CardContainer = styled.div`

`;

export const ContainerContact = styled.div`
  margin: 10px;
`;

export const DivLinks = styled.div`
  display: flex;
  gap: 15px;
`;

export const Links = styled.a`
  color: ${(props) => props.color};
  text-decoration: none;
  font-size: 40px;
  :hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
