import styled from "styled-components";
import img from '../../images/purple-bg.jpg'

export const FooterContainer = styled.div`
  background: url(${img});
  padding: 30px;
  height: 70px;
`;

export const Copyright = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  border-top: 1px rgba(255, 255, 255, 0.301) solid;
  padding: 5px;
  color: rgba(255, 255, 255, 0.877);
`;

export const DivTopo = styled.div`
  background-color: #38322e;
  border-radius: 65px;
  bottom: 14px;
  box-shadow: 2px 3px 19px -2px rgba(0, 0, 0, .75);
  color: #d9a000;
  cursor: pointer;
  height: 40px;
  position: fixed;
  right: 22px;
  width: 40px;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
`;