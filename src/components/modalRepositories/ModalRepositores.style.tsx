import styled from "styled-components";
import { Theme } from "../../theme";

export const ContainerModal = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  bottom: 0;
`;

export const Modal = styled.div`
  width: 70%;
  max-height: 80%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
  @media (max-width: 1024px) {
    width: 90%;
  }
`;

export const DivClose = styled.div`
  color: ${Theme.color.purpleNormal};
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  font-size: 20px;
`;

export const CardRepo = styled.div`
  display: grid;
  grid-template-columns: 25% 40% 15% 20%;
  border-bottom: 1px solid #eee;
  gap: 10px;
  align-items: center;
  :nth-child(odd) {
    background-color:#D8D8D8;
  }
  :nth-child(even) {
    background-color:#E8E8E8;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

export const PDataGit = styled.p`
  color: ${Theme.color.blueDark};
`;