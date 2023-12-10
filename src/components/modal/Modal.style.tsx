import styled from "styled-components";

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
  height: 500px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    width: 90%;
  }
`;

export const BtnClose = styled.button`
  width: 25px;
  height: 25px;
  margin-left: 97%;
  margin-bottom: 60px;
  font-size: 25px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;

  @media (max-width: 840px) {
    margin-left: 90%;
  }
`;

export const Percent = styled.div<{ width: string; color: string }>`
  width: ${(props) => props.width};
  background: ${(props) => props.color};
`;

export const UlSkill = styled.ul`
  list-style: none;

  & li {
    height: 0.4rem;
    background: #a1a1a1;
    width: 100%;
    margin-bottom: 3rem;
    padding: 0;
    position: relative;
    display: list-item;
  }
`;
