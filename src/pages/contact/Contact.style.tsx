import styled from "styled-components";

export const ContainerContact = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  justify-content: center;
  height: 76vh;
  margin: 0 100px;
  @media (max-width: 1300px) {
    grid-template-columns: auto;
  }
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
