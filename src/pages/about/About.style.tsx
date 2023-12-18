import styled from "styled-components";
import img from "../../images/purple-bg.jpg";

export const FirstContainer = styled.div`
  display: grid;
  grid-template-columns: auto 30%;
  justify-content: flex-end;
  gap: 30px;
  height: 600px;
  align-items: center;
  @media (max-width: 1200px) {
    grid-template-columns: auto;
  }
`;

export const DivNameButtons = styled.div`
  @media (max-width: 1200px) {
    text-align: center;
  }
`;

export const SecContainer = styled.div`
  /* background: #919bf3; */
  display: flex;
  padding: 2% 25%;
  gap: 10px;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    padding: 5%;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const TercContainer = styled.div`
  /* background: #919bf3; */
`;

export const ImgCustom = styled.img<{
  radius: string;
  width: string;
  displayMedia: string;
}>`
  border-radius: ${(props) => props.radius};
  width: ${(props) => props.width};
  @media (max-width: 1200px) {
    display: ${(props) => props.displayMedia};
  }
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
`;

export const Bio = styled.h2`
  color: white;
  text-align: end;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

export const BtnDiv = styled.div`
  display: flex;
  gap: 15px;
`;

export const DivTitles = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  background: url(${img});
  color: white;
  padding: 0 50px;
  margin: 50px 0;
  justify-content: space-between;
`;

export const TitleSection = styled.h2`
  color: white;
`;

export const Section = styled.section`
  circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .circles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: #8d05dc4d;
    animation: animate 25s linear infinite;
    bottom: -150px;
  }

  .circles li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }

  .circles li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
  }

  .circles li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
  }

  .circles li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
  }

  .circles li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
  }

  .circles li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
  }

  .circles li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
  }

  .circles li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
  }

  .circles li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
  }

  .circles li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
  }

  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 50%;
    }

    100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
    }
  }

  position: relative;
  .home {
    height: 100%;
    .content {
      height: 100%;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.2rem;
      padding-left: 18rem;
      margin-top: 8rem;
      width: 60%;
      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
        }
      }
      .subTitle {
        p {
          width: 100%;
          margin-bottom: 2rem;
          text-align: justify;
        }
      }
    }
  }
  .info {
    position: absolute;
    bottom: -6rem;
    right: 0;
    background-color: var(--secondary-color);
    padding: 4rem;
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      color: white;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .home {
      .content {
        padding-left: 2rem;
        width: 100%;
        margin-bottom: 2rem;
        .title {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }
    .info {
      position: initial;
      .grid {
        grid-template-columns: 1fr;
      }
    }
  }
`;

export const TooltipText = styled.div`
  background: rgba(28, 56, 151, 0.9);
  color: #fff;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 44px;
  border-radius: 50px;
  cursor: pointer;
`;
export const TooltipBox = styled.div`
   color: transparent;
   background-color: transparent;
   border-radius: 4px;
   transition: visibility 0.5s, color 0.5s, background-color 0.5s, width 0.5s, padding 0.5s ease-in-out;
   visibility: hidden;
`;
export const TooltipCard = styled.div`
   margin: 16px;
   display: flex;
   & ${TooltipText}:hover + ${TooltipBox} {
      visibility: visible;
      color: #fff;
      width: 450px;
      border-radius: 4px;
   }
`;