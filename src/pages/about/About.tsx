import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import Skills from "../../components/skills/Skills";
import { UserContext } from "../../context/UserContext";
import { Btn, Paragraph, TitleGradient } from "../../globalStyles.style";
import {
  Bio,
  BtnDiv,
  ImgCustom,
  SecContainer,
  FirstContainer,
  TitlePrincipal,
  TercContainer,
  DivTitles,
  TitleSection,
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
          <div>
            <TitlePrincipal>Olá! Eu sou a</TitlePrincipal>
            <TitlePrincipal>{dataUser.name}</TitlePrincipal>
            <Bio>Desenvolvedora Front-End</Bio>
            <BtnDiv>
              <Btn
                width={"200px"}
                color={Theme.color.blueLight}
                onClick={() => navigate("/repositories")}
              >
                Projetos
              </Btn>
              <Btn
                width={"200px"}
                color={Theme.color.blueLight}
                onClick={() => navigate("/contact")}
              >
                Contato
              </Btn>
            </BtnDiv>
          </div>
          <div>
            <ImgCustom
              src={dataUser.avatar_url}
              alt="Imagem de perfil"
              radius={"50%"}
              width={"400px"}
            />
          </div>
        </FirstContainer>
      )}
      <DivTitles>
        <TitleSection>Sobre mim</TitleSection>
      </DivTitles>
      <SecContainer>
        <div>
          <ImgCustom
            src={meImg}
            alt="Uma foto minha"
            radius={"10%"}
            width={"200px"}
          />
        </div>
        <div>
          <Paragraph color={"white"}>
            Meu nome é Thais Bertoldi, tenho 27 anos, moro no interior de Santa
            Catarina e sou apaixonada por tecnologia. Tenho adquirido
            conhecimento em várias tecnologias para me profissionalizar na área
            de desenvolvimento front-end, como, por exemplo, Javascript,
            Typescript, React e Redux. Fiz o programa Vem Ser DBC, da empresa
            DBC Company, e tive a oportunidade de realizar diversos projetos.
            Sou especializada na Lei Geral de Proteção de Dados pela
            Assespro-RS.
          </Paragraph>
        </div>
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
