import styled from "styled-components";

export const ContainerProjects = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 15px;
  background-color: #fff;
  border-radius: 15px;
  padding-bottom: 20px;
  -webkit-box-shadow: 0px 1px 31px 9px rgba(0, 0, 0, 0.46);
  box-shadow: 0px 1px 31px 9px rgba(105, 105, 105, 0.46);
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
`;
