import Skills from "../../components/skills/Skills";
import { Paragraph, TitlePrincipal } from "../../globalStyles.style";
import meImg from "../../images/me.jpg";
import {
  Bio, DivNameButtons, DivTitles, FirstContainer, ImgCustom,
  SecContainer, Section, TercContainer, TitleSection
} from "./About.style";
import {motion} from 'framer-motion';

function About() {

  return (
    <div>
       <Section id="home">
        <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
        <FirstContainer>
        <DivNameButtons>
            <TitlePrincipal>
              <motion.h1
                animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
                transition={{
                    duration: 2,
                    delay: 0.3,
                }}
                initial={{ opacity: 0, scale: 1.0 }}
                whileHover={{ scale: 1.0 }}
            >
                Olá, eu sou a Thais Bertoldi
            </motion.h1></TitlePrincipal>
            <Bio>Desenvolvedora Front-End</Bio>
          </DivNameButtons>
          <ImgCustom
            src={meImg}
            alt="Imagem de perfil"
            radius={"100%"}
            width={"300px"}
            displayMedia={'none'}
          />
        </FirstContainer>
        </Section>
      <DivTitles>
        <TitleSection>Sobre mim</TitleSection>
      </DivTitles>
      <SecContainer id="about">
        <Paragraph color={"white"}>
          Meu nome é Thais Bertoldi, tenho 28 anos, moro no interior de Santa
          Catarina e sou apaixonada por tecnologia. Tenho adquirido conhecimento
          em várias tecnologias para me profissionalizar na área de
          desenvolvimento front-end, como, por exemplo, Javascript, Typescript,
          React, Angular, Redux e Node. Fiz o programa Vem Ser DBC, da empresa DBC Company, e
          tive a oportunidade de realizar diversos projetos. Sou especializada
          na Lei Geral de Proteção de Dados pela Assespro-RS. Atualmente, trabalho no projeto OpenFinance do Banco Sicredi.
        </Paragraph>
      </SecContainer>
      <DivTitles>
        <TitleSection id="skills">Tecnologias</TitleSection>
      </DivTitles>
      <TercContainer>
        <Skills />
      </TercContainer>
    </div>
  );
}

export default About;
