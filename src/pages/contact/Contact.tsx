import { ContainerContact, DivLinks, Links } from "./Contact.style";
import {
  FaLinkedin,
  FaGithubSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { DivArrowBack, Paragraph, TitleGradient } from "../../globalStyles.style";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate()

  return (
    <>
      <DivArrowBack>
        <MdOutlineArrowBackIosNew onClick={() => navigate("/repositories")} />
      </DivArrowBack>
      <ContainerContact>
        <div>
          <TitleGradient size={"30px"}>Contate-me</TitleGradient>
          <Paragraph color={'white'}>
            Estou ansiosa para receber uma mensagem sua! Pode ser elogios,
            críticas, perguntas, propostas, tudo é bem-vindo!Encontre-me nas
            redes sociais:
          </Paragraph>
          <DivLinks>
            <Links
              href="https://www.facebook.com/thais.bertoldi"
              color={"#395498"}
            >
              <FaFacebookSquare />
            </Links>
            <Links href="https://www.instagram.com/thaais__b" color={"#BA318B"}>
              <FaInstagramSquare />
            </Links>
            <Links
              href="https://www.linkedin.com/in/thaisbertoldi"
              color={"#0073B1"}
            >
              <FaLinkedin />
            </Links>
          </DivLinks>
          <Paragraph color={'white'}>
            Você também pode acessar meu GitHub, lá tem todos os meus projetos e
            minha evolução nas tecnologias frontend:
          </Paragraph>
          <DivLinks>
            <Links href="https://github.com/thaisBertoldi" color={"#24292F"}>
              <FaGithubSquare />
            </Links>
          </DivLinks>
        </div>
      </ContainerContact>
    </>
  );
}

export default Contact;
