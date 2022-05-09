import styled from "styled-components";

export const ContainerSkills = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  gap: 15px;
  align-items: center;
  justify-content: center;
  padding: 15px;
  @media (max-width: 1300px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 700px) {
    grid-template-columns: auto auto;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 250px;
  border-radius: 15px;
  justify-content: center;
  background-color: white;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  :hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-box-shadow: 0px 1px 31px 9px #351D66;
    box-shadow: 0px 1px 31px 9px #351D66;
  }
`;

export const Img = styled.img`
  width: 60%;
  height: 50%;
`;
