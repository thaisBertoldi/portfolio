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
} from "./About.style";
import { motion } from "framer-motion";
import { useState } from "react";
import { ModalDTO } from "../../models/ModalComponentDTO";
import ModalInfo from "../../components/modal/ModalInfo.component";

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
        <div>
          <div className="title title--spacing">
            Square
            <div className="tooltip">
              <div className="tooltip-spacing">
                <div className="tooltip-bg1"></div>
                <div className="tooltip-bg2"></div>
                <div className="tooltip-text">?</div>
              </div>
              <div className="bubble bubble-rects">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 140 40"
                  height="80"
                  width="210"
                >
                  <path
                    d="M33.196 0h94.61C134.56 0 140 5.44 140 12.195v15.61C140 34.56 134.56 40 127.805 40h-94.61C26.44 40 21 34.56 21 27.805v-1.903S18.196 15.427 0 20c17.185-10.084 21-5.902 21-5.902v-1.903C21 5.44 26.44 0 33.196 0z"
                    fill="#1a1a1a"
                  />
                </svg>
                <div className="bubble-text bubble-text-rects">Hovering square</div>
              </div>
            </div>
          </div>
        </div>
        <p onClick={() => setopenModal({ open: true })}>
          Clique aqui para ver meu progresso nessas tecnologias
        </p>
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
