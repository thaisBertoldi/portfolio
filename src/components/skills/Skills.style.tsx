import styled from "styled-components";

export const ContainerSkills = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto;
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
  width: 100px;
  padding: 5px;
  height: 130px;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
  justify-content: center;
  background-color: white;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  :hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-box-shadow: 19px 21px 20px -3px rgba(53,29,102,0.6);
-moz-box-shadow: 19px 21px 20px -3px rgba(53,29,102,0.6);
box-shadow: 19px 21px 20px -3px rgba(53,29,102,0.6);
  }
`;

export const Img = styled.img`
  width: 50%;
  height: 40%;
`;
