import styled, { keyframes } from "styled-components";

const rotate = keyframes`
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-250px * 7))}
`

export const ContainerSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  justify-content: center;
  gap: 10px;
  height: 250px;
	margin: auto;
	overflow:hidden;
	position: relative;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10%;
  padding: 0 5px;
  height: 350px;
	width: 200px;
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

export const SlideTrack = styled.div`
	animation: ${rotate} 40s linear infinite;
	display: flex;
	width: calc(250px * 14);
`;