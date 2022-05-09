import { useState } from "react";
import { MdMenu } from "react-icons/md";
import ListLinkPages from "./ListLinkPages";
import {
  List,
  ContainerMenu,
  HamburguerDiv,
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
          <ListLinkPages />
        </HamburguerDiv>
      )}
      <ContainerMenu>
        <List>
          <ListLinkPages />
        </List>
      </ContainerMenu>
    </>
  );
}
