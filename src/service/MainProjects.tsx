import projetoFinal from "../images/projects/projeto-final.gif";
import pagina1pf from "../images/projects/pagina1pf.png";
import pokedex from "../images/projects/pokedex.gif";
import pagina1poke from "../images/projects/pagina1poke.png";
import nytimes from "../images/projects/nytimes.gif";
import pagina1ny from "../images/projects/pagina1ny.png";
import crud from "../images/projects/crud.gif";
import pagina1crud from "../images/projects/pagina1crud.png";
import linkedin from "../images/projects/linkedin.gif";
import pagina1linkedin from "../images/projects/pagina1linkedin.png";
import landingpage from "../images/projects/landingpage.gif";
import pagina1landing from "../images/projects/pagina1landing.png";
import { MainProjectsDTO } from "../models/AllDTOs";

export const MainProjects: MainProjectsDTO['project'] = [
    {
      nome: "Sistema de Compras",
      imgFixa: pagina1pf,
      imgGif: projetoFinal,
      url: "https://github.com/thaisBertoldi/trabalhoFinalVemSerDBC",
      tecnologias: {
        typescript: true,
        react: true,
        redux: true,
        javascript: false,
        styledComp: true,
        css: false,
        html: false,
      },
    },
    {
      nome: "Pokedex",
      imgFixa: pagina1poke,
      imgGif: pokedex,
      url: "https://github.com/thaisBertoldi/pokedexReduxVemSerDBC",
      tecnologias: {
        typescript: true,
        react: true,
        redux: true,
        javascript: false,
        styledComp: true,
        css: false,
        html: false,
      },
    },
    {
      nome: "New York Times",
      imgFixa: pagina1ny,
      imgGif: nytimes,
      url: "https://github.com/thaisBertoldi/trabalhoNYTimesVemSerDBC",
      tecnologias: {
        typescript: false,
        react: true,
        redux: false,
        javascript: true,
        styledComp: true,
        css: false,
        html: false,
      },
    },
    {
      nome: "Crud Completo",
      imgFixa: pagina1crud,
      imgGif: crud,
      url: "https://github.com/thaisBertoldi/crud-vemser",
      tecnologias: {
        typescript: false,
        react: true,
        redux: false,
        javascript: true,
        styledComp: true,
        css: false,
        html: false,
      },
    },
    {
      nome: "Linkedin",
      imgFixa: pagina1linkedin,
      imgGif: linkedin,
      url: "https://github.com/thaisBertoldi/exercicio-linkedin",
      tecnologias: {
        typescript: false,
        react: false,
        redux: false,
        javascript: false,
        styledComp: false,
        css: true,
        html: true,
      },
    },
    {
      nome: "'Landing Page' com CSS:",
      imgFixa: pagina1landing,
      imgGif: landingpage,
      url: "https://github.com/thaisBertoldi/vemserdbc-aulas/tree/main/homeworkPaginaSiteCarnaval",
      tecnologias: {
        typescript: false,
        react: false,
        redux: false,
        javascript: false,
        styledComp: false,
        css: true,
        html: true,
      },
    },
  ];