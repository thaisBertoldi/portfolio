import { Field, Form, Formik } from "formik";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { Paragraph } from "../../globalStyles.style";
import { DivTitles, TitleSection } from "../about/About.style";
import {
  CardContainer,
  ContainerContact,
  ContainerForm,
  DivField,
  DivLinks,
  Links,
} from "./Contact.style";

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
            críticas, perguntas, propostas, tudo é bem-vindo!Encontre-me nas
            redes sociais:
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
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <ContainerForm>
              <DivField>
                <label htmlFor="name">Nome</label>
                <Field id="name" name="name" placeholder="Nome" />
              </DivField>

              <DivField>
                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  name="email"
                  placeholder="email@email.com"
                  type="email"
                />
              </DivField>

              <DivField>
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Digite sua mensagem"
                />
              </DivField>

              <button type="submit">Submit</button>
            </ContainerForm>
          </Form>
        </Formik>
      </CardContainer>
    </div>
  );
}

export default Contact;
