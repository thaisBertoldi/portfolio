import { Item, LinkCustom } from "./Menu.style";

function ListLinkPages() {
  return (
    <>
      <Item>
        <LinkCustom to="/">Sobre mim</LinkCustom>
      </Item>
      <Item>
        <LinkCustom to="/repositories">Projetos</LinkCustom>
      </Item>
      <Item>
        <LinkCustom to="/contact">Contato</LinkCustom>
      </Item>
    </>
  );
}

export default ListLinkPages;
