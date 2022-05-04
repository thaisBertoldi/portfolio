import { ContainerMenu, Item, LinkCustom, List } from "./Menu.style";

export default function Menu() {
  return (
    <ContainerMenu>
      <nav>
        <List>
          <Item>
            <LinkCustom to="/">Sobre mim</LinkCustom>
          </Item>
          <Item>
            <LinkCustom to="/repositories">Repositórios</LinkCustom>
          </Item>
          <Item>
            <LinkCustom to="/contact">Contato</LinkCustom>
          </Item>
        </List>
      </nav>
    </ContainerMenu>
  );
}
