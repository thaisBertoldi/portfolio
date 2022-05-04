import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Skills from "../../components/skills/Skills";
import { UserContext } from "../../context/UserContext";
import { Btn } from "../../globalStyles.style";
import {
  Bio,
  BtnDiv,
  FirstContainer,
  ImgCustom,
  SecContainer,
  TitlePrincipal,
} from "./About.style";

function About() {
  const { dataUser } = useContext<any>(UserContext);
  const navigate = useNavigate()

  return (
    <>
      <FirstContainer>
        <div>
          <TitlePrincipal>Olá! Eu sou a</TitlePrincipal>
          <TitlePrincipal>{dataUser.name}</TitlePrincipal>
          <Bio>{dataUser.bio}</Bio>
          <BtnDiv>
            <Btn width={"200px"} color={"white"} onClick={() => navigate('/repositories')}>
              Projetos
            </Btn>
            <Btn width={"200px"} color={"white"} onClick={() => navigate('/contact')}>
              Contato
            </Btn>
          </BtnDiv>
        </div>
        <div>
          <ImgCustom src={dataUser.avatar_url} alt="Imagem de perfil" />
        </div>
      </FirstContainer>
      <SecContainer>
        <Skills />
      </SecContainer>
    </>
  );
}

export default About;
