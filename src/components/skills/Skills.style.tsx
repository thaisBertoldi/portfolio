import styled from "styled-components";

export const ContainerSkills = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
    padding: 15px;
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
    -webkit-box-shadow: 0px 1px 31px 9px rgba(0, 0, 0, 0.46);
  box-shadow: 0px 1px 31px 9px rgba(105, 105, 105, 0.46);
  }
`;

export const Img = styled.img`
    width: 60%;
    height: 50%;
`;