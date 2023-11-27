import { FaArrowAltCircleUp } from "react-icons/fa";
import { LinkCustom } from "../menu/Menu.style";
import { DivTopo, FooterContainer } from "./Footer.style";

export default function Footer() {
  return (
    <FooterContainer>
      <LinkCustom href="/"><DivTopo><FaArrowAltCircleUp /></DivTopo></LinkCustom>
    </FooterContainer>
  );
}