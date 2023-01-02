import styled from "styled-components";

export const CardContainer = styled.div`
  margin: 5%;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: #25b7fa;
`;

export const ContainerContact = styled.div`
  margin: 10px;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 8px;

  input, textarea, button {
    border-radius: 5px;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    height: 30px;
    border: none;
    ::placeholder {
      font-family: 'Times New Roman', Times, serif;
    }
  }
  
  #message {
    height: 60px;
  }

  label {
    color: white;
  }
  
  button {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #06b406;
    color: white;
  }

`;

export const DivField = styled.div`
  display: flex;
  flex-direction: column;
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
