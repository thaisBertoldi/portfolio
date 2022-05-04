import { Copyright, FooterContainer } from "./Footer.style";

export default function Footer() {
  return (
    <FooterContainer>
      <Copyright>
        <small>
          ©{new Date().getFullYear()} Copyright
        </small>
      </Copyright>
    </FooterContainer>
  );
}