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
