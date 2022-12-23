import { Item, LinkCustom } from "./Menu.style";

function ListLinkPages() {
  
  function menuOnClick() {
    document.getElementById("menu-bar")?.classList.toggle("change");
    document.getElementById("nav")?.classList.toggle("change");
    document.getElementById("menu-bg")?.classList.toggle("change-bg");
  }
  return (
    <>
      <Item onClick={() => menuOnClick()}>
        <LinkCustom href="#about">Sobre mim</LinkCustom>
      </Item>
      <Item onClick={() => menuOnClick()}>
        <LinkCustom href="#skills">Skills</LinkCustom>
      </Item>
      <Item onClick={() => menuOnClick()}>
        <LinkCustom href="#repositories">Projetos</LinkCustom>
      </Item>
      <Item onClick={() => menuOnClick()}>
        <LinkCustom href="#contact">Contato</LinkCustom>
      </Item>
    </>
  );
}

export default ListLinkPages;
