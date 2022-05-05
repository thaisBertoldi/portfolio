import FormContact from "../../components/formContact/FormContact";
import { ContainerContact, DivLinks, Links } from "./Contact.style";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <ContainerContact>
      <div>
        <h1>Contate-me</h1>
        <p>
          Estou ansiosa para receber uma mensagem sua! Pode ser elogios,
          críticas, perguntas, propostas, tudo é bem-vindo! Ou você também pode
          me encontrar nas redes sociais
        </p>
        <DivLinks>
          <Links href="https://www.facebook.com/thais.bertoldi" color={'#395498'}>
            <FaFacebookSquare />
          </Links>
          <Links href="https://www.instagram.com/thaais__b" color={'#BA318B'}>
            <FaInstagramSquare />
          </Links>
          <Links href="https://www.linkedin.com/in/thaisbertoldi" color={'#0073B1'}>
            <FaLinkedin />
          </Links>
        </DivLinks>
      </div>
      <div>
        <FormContact />
      </div>
    </ContainerContact>
  );
}

export default Contact;
