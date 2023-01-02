import styled from "styled-components";

export const ContainerSkills = styled.div`
  padding: 15px;
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10%;
  margin: 0 5px;
  height: 250px;
  justify-content: center;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  :hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-box-shadow: 0px 18px 19px -8px rgba(110,57,222,1);
    -moz-box-shadow: 0px 18px 19px -8px rgba(110,57,222,1);
    box-shadow: 0px 18px 19px -8px rgba(110,57,222,1);
  }
`;

export const Img = styled.img`
  width: 50%;
  height: 40%;
`;
