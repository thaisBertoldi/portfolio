import styled from "styled-components";

export const ContainerSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  justify-content: center;
  gap: 10px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10%;
  padding: 0 5px;
  height: 200px;
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
  width: 80%;
  height: 40%;
`;
