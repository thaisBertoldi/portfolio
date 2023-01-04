import emailjs from "emailjs-com";
import { FormikValues, useFormik } from "formik";
import Notiflix from "notiflix";
import { useState } from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import * as Yup from "yup";
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
  Loading,
} from "./Contact.style";

function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      subject: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(
        "Preencha esse campo para enviar sua mensagem"
      ),
      subject: Yup.string().required(
        "Preencha esse campo para enviar sua mensagem"
      ),
      message: Yup.string().required(
        "Preencha esse campo para enviar sua mensagem"
      ),
      email: Yup.string()
        .matches(
          /\w+@\w+\.\w{1,3}\.?\w{2}?$/i,
          "Esse campo precisa ser preenchido com um email válido"
        )
        .required("Preencha esse campo para enviar sua mensagem"),
    }),
    onSubmit: (values: FormikValues) => {
      setIsLoading(true);
      emailjs
        .send(
          "service_9tt517a",
          "template_75iibwo",
          values,
          "LhUkBMSFm-NwLdYqQ"
        )
        .then(
          (result) => {
            setIsLoading(false);
            Notiflix.Notify.success("Email enviado. Obrigada!");
            formik.resetForm();
          },
          (error) => {
            setIsLoading(false);
            Notiflix.Notify.failure(
              "Não foi possivel enviar a mensagem. Por favor, tente novamente"
            );
          }
        );
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
                maxLength={50}
                id="name"
                name="name"
                placeholder="Nome"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.errors.name && formik.touched.name ? (
                <AlertErrorInput>{formik.errors.name}</AlertErrorInput>
              ) : null}
            </DivField>

            <DivField>
              <label htmlFor="subject">Assunto</label>
              <input
                maxLength={50}
                id="subject"
                name="subject"
                type="text"
                autoComplete="off"
                placeholder="Assunto"
                onChange={formik.handleChange}
                value={formik.values.subject}
              />
              {formik.errors.subject && formik.touched.subject ? (
                <AlertErrorInput>{formik.errors.subject}</AlertErrorInput>
              ) : null}
            </DivField>

            <DivField>
              <label htmlFor="email">Email</label>
              <input
                maxLength={50}
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
                maxLength={150}
                id="message"
                name="message"
                placeholder="150 caracteres permitidos"
                value={formik.values.message}
                onChange={formik.handleChange}
              />
              {formik.errors.message && formik.touched.message ? (
                <AlertErrorInput>{formik.errors.message}</AlertErrorInput>
              ) : null}
            </DivField>
            {!isLoading && <button type="submit">Enviar mensagem</button>}
            {isLoading && (
              <button type="submit" disabled>
                <Loading />
              </button>
            )}
          </ContainerForm>
        </form>
      </CardContainer>
    </div>
  );
}

export default Contact;
