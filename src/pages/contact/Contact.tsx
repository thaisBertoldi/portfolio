import { Field, Form, Formik, useFormik } from "formik";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { Paragraph } from "../../globalStyles.style";
import { DivTitles, TitleSection } from "../about/About.style";
import {
  AlertErrorInput,
  CardContainer,
  ContainerContact,
  ContainerForm,
  DivField,
  DivLinks,
  Links,
} from "./Contact.style";
import Notiflix from "notiflix";
import { EmailDTO } from "../../models/AllDTOs";
import * as Yup from "yup";

function Contact() {
  const sendEmail = (values: EmailDTO) => {
    Notiflix.Notify.success("Email enviado. Obrigada!");
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      message: Yup.string()
      .required("Preencha esse campo para enviar sua mensagem"),
      email: Yup.string()
      .matches(/\w+@\w+\.\w{1,3}\.?\w{2}?$/i, "Esse campo precisa ser preenchido com um email válido")
      .required("Preencha esse campo para enviar sua mensagem")
    }),
    onSubmit: (values: EmailDTO) => {
      sendEmail(values);
    },
  });

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
        <form onSubmit={formik.handleSubmit}>
          <ContainerForm>
            <DivField>
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                name="name"
                placeholder="Nome"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </DivField>

            <DivField>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                placeholder="email@email.com"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && formik.touched.email ? (
                  <AlertErrorInput>{formik.errors.email}</AlertErrorInput>
                ) : null}
            </DivField>

            <DivField>
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                placeholder="Digite sua mensagem"
                value={formik.values.message}
                onChange={formik.handleChange}
              />
              {formik.errors.message && formik.touched.message ? (
                  <AlertErrorInput>{formik.errors.message}</AlertErrorInput>
                ) : null}
            </DivField>

            <button type="submit">Submit</button>
          </ContainerForm>
        </form>
      </CardContainer>
    </div>
  );
}

export default Contact;
