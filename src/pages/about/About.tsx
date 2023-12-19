import Skills from "../../components/skills/Skills";
import { Paragraph, TitlePrincipal } from "../../globalStyles.style";
import meImg from "../../images/me.jpg";
import {
  Bio,
  DivNameButtons,
  DivTitles,
  FirstContainer,
  ImgCustom,
  SecContainer,
  Section,
  TercContainer,
  TitleSection,
  TooltipBox,
  TooltipCard,
  TooltipText,
} from "./About.style";
import { motion } from "framer-motion";
import { useState } from "react";
import { ModalDTO } from "../../models/ModalComponentDTO";
import ModalInfo from "../../components/modal/ModalInfo.component";
import { GiProgression } from "react-icons/gi";

function About() {
  const [openModal, setopenModal] = useState<ModalDTO>({
    open: false,
    id: 0,
  });

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
              </motion.h1>
            </TitlePrincipal>
            <Bio>Desenvolvedora Full-stack</Bio>
          </DivNameButtons>
          <ImgCustom
            src={meImg}
            alt="Imagem de perfil"
            radius={"100%"}
            width={"300px"}
            displayMedia={"none"}
          />
        </FirstContainer>
      </Section>
      <DivTitles>
        <TitleSection>Sobre mim</TitleSection>
      </DivTitles>
      <SecContainer id="about">
        <Paragraph color={"white"}>
          Meu nome é <b>Thais Bertoldi</b>, tenho 28 anos, moro em de Santa
          Catarina e sou apaixonada por tecnologia. Tenho adquirido conhecimento
          em várias tecnologias para me profissionalizar na área de
          desenvolvimento fullstack, como, por exemplo, <b>Java</b>,{" "}
          <b>Spring</b>, <b>Microsserviços</b>, <b>Webflux</b>,{" "}
          <b>Javascript</b>, <b>Typescript</b>, <b>React</b>, <b>Angular</b>,{" "}
          <b>Vuejs</b>, <b>Redux</b> e <b>Node</b>. Fiz o programa{" "}
          <b>Vem Ser DBC</b>, da empresa DBC Company, e tive a oportunidade de
          realizar diversos projetos. Sou especializada na{" "}
          <b>Lei Geral de Proteção de Dados</b> pela Assespro-RS. Atualmente,
          trabalho no projeto <b>OpenFinance</b>.
        </Paragraph>
      </SecContainer>
      <DivTitles>
        <TitleSection id="skills">Tecnologias</TitleSection>
        <TooltipCard onClick={() => setopenModal({ open: true })}>
         <TooltipText>
          <GiProgression />
         </TooltipText>
         <TooltipBox>
            <p>Clique aqui para ver meu progresso nessas tecnologias</p>
         </TooltipBox>
      </TooltipCard>
      </DivTitles>
      <TercContainer>
        <Skills />
      </TercContainer>
      {openModal.open && (
        <ModalInfo onClick={() => setopenModal({ open: false })} />
      )}
    </div>
  );
}

export default About;
