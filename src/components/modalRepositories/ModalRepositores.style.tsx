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
  padding-left: 15px;
  gap: 15px;
  align-items: center;
  :nth-child(odd) {
    background-color: #a7c3d1;
  }
  :nth-child(even) {
    background-color: #c6e5f5;
  }
  @media (max-width: 900px) {
    grid-template-columns: 25% 40% 15% auto;
  }
`;

export const PDataGit = styled.p`
  color: #013477;
  max-width: 25ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media (max-width: 900px) {
    
  }
`;