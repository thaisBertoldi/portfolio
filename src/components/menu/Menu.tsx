import { useState } from "react";
import { MdMenu } from "react-icons/md";
import {
  ContainerMenu,
  HamburguerDiv,
  Item,
  LinkCustom,
  List,
  MenuHamburguer,
} from "./Menu.style";

export default function Menu() {
  const [openHamburguer, setOpenHamburguer] = useState<boolean>(false);
  return (
    <>
      <MenuHamburguer>
        <MdMenu onClick={() => setOpenHamburguer(!openHamburguer)} />
      </MenuHamburguer>
      {openHamburguer && (
        <HamburguerDiv>
            <Item>
              <LinkCustom to="/">Sobre mim</LinkCustom>
            </Item>
            <Item>
              <LinkCustom to="/repositories">Repositórios</LinkCustom>
            </Item>
            <Item>
              <LinkCustom to="/contact">Contato</LinkCustom>
            </Item>
        </HamburguerDiv>
      )}
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
    </>
  );
}
