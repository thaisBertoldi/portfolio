import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import Skills from "../../components/skills/Skills";
import { UserContext } from "../../context/UserContext";
import { Btn, Paragraph, TitlePrincipal } from "../../globalStyles.style";
import {
  Bio,
  BtnDiv,
  ImgCustom,
  SecContainer,
  FirstContainer,
  TercContainer,
  DivTitles,
  TitleSection,
  DivNameButtons,
} from "./About.style";
import meImg from "../../images/me.jpg";
import { Theme } from "../../theme";

function About() {
  const { dataUser, loading } = useContext<any>(UserContext);
  const navigate = useNavigate();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <FirstContainer>
          <ImgCustom
            src={dataUser.avatar_url}
            alt="Imagem de perfil"
            radius={"50%"}
            width={"400px"}
            displayMedia={'none'}
          />
          <DivNameButtons>
            <TitlePrincipal>Olá! Eu sou a</TitlePrincipal>
            <TitlePrincipal>{dataUser.name}</TitlePrincipal>
            <Bio>Desenvolvedora Front-End</Bio>
            <BtnDiv>
              <Btn
                width={"200px"}
                widthMediaQuery={'100px'}
                color={Theme.color.blueLight}
                onClick={() => navigate("/repositories")}
              >
                Projetos
              </Btn>
              <Btn
                width={"200px"}
                widthMediaQuery={'100px'}
                color={Theme.color.blueLight}
                onClick={() => navigate("/contact")}
              >
                Contato
              </Btn>
            </BtnDiv>
          </DivNameButtons>
        </FirstContainer>
      )}
      <DivTitles>
        <TitleSection>Sobre mim</TitleSection>
      </DivTitles>
      <SecContainer>
        <ImgCustom
          src={meImg}
          alt="Uma foto minha"
          radius={"10%"}
          width={"200px"}
          displayMedia={'flex'}
        />
        <Paragraph color={"white"}>
          Meu nome é Thais Bertoldi, tenho 27 anos, moro no interior de Santa
          Catarina e sou apaixonada por tecnologia. Tenho adquirido conhecimento
          em várias tecnologias para me profissionalizar na área de
          desenvolvimento front-end, como, por exemplo, Javascript, Typescript,
          React e Redux. Fiz o programa Vem Ser DBC, da empresa DBC Company, e
          tive a oportunidade de realizar diversos projetos. Sou especializada
          na Lei Geral de Proteção de Dados pela Assespro-RS.
        </Paragraph>
      </SecContainer>
      <DivTitles>
        <TitleSection>Tecnologias</TitleSection>
      </DivTitles>
      <TercContainer>
        <Skills />
      </TercContainer>
    </>
  );
}

export default About;
