import { useState } from "react";
import ListLinkPages from "./ListLinkPages";
import { Bar, MenuBar, MenuDiv } from './Menu.style';
import './style.css';

export default function Menu() {
  const [openHamburguer, setOpenHamburguer] = useState<boolean>(false);

  function menuOnClick() {
    document.getElementById("menu-bar")?.classList.toggle("change");
    document.getElementById("nav")?.classList.toggle("change");
    document.getElementById("menu-bg")?.classList.toggle("change-bg");
  }

  return (
    <>
      <MenuDiv id="menu">
        <MenuBar id="menu-bar" onClick={() => menuOnClick()}>
          <Bar id="bar1" ></Bar>
          <Bar id="bar2"></Bar>
          <Bar id="bar3"></Bar>
        </MenuBar>
        <nav className="nav" id="nav">
          <ListLinkPages />
        </nav>
      </MenuDiv>

      <div className="menu-bg" id="menu-bg"></div>
    </>
  );
}
