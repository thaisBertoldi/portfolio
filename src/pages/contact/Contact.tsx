import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { Paragraph } from "../../globalStyles.style";
import { DivTitles, TitleSection } from "../about/About.style";
import { CardContainer, ContainerContact, DivLinks, Links } from "./Contact.style";

function Contact() {
  // const navigate = useNavigate()

  return (
    <div>
        <DivTitles>
          <TitleSection>Contate-me</TitleSection>
        </DivTitles>
        <CardContainer>
        <ContainerContact id="contact">
        <Paragraph color={"white"}>
          Estou ansiosa para receber uma mensagem sua! Pode ser elogios,
          críticas, perguntas, propostas, tudo é bem-vindo!Encontre-me nas redes
          sociais:
        </Paragraph>
        <DivLinks>
          <Links
            href="https://www.facebook.com/thais.bertoldi"
            color={"#01a6ff"}
          >
            <FaFacebookSquare />
          </Links>
          <Links href="https://www.instagram.com/thaais__b" color={"#ff40bc"}>
            <FaInstagramSquare />
          </Links>
          <Links
            href="https://www.linkedin.com/in/thaisbertoldi"
            color={"#01a6ff"}
          >
            <FaLinkedin />
          </Links>
        </DivLinks>
        <Paragraph color={"white"}>
          Você também pode acessar meu GitHub, lá tem todos os meus projetos e
          minha evolução nas tecnologias frontend:
        </Paragraph>
        <DivLinks>
          <Links href="https://github.com/thaisBertoldi" color={"#ffffff"}>
            <FaGithubSquare />
          </Links>
        </DivLinks>
    </ContainerContact>
    </CardContainer>
      </div>
  );
}

export default Contact;
