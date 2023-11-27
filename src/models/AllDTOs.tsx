export interface ContextDTO {
  children: React.ReactNode;
}

export interface ModalRepositoriesDTO {
  onClick: Function | any;
}

export interface MainProjectsDTO {
  project: {
    nome: string;
    imgFixa: string;
    imgGif: string;
    url: string;
    tecnologias: {
      typescript: boolean;
      react: boolean;
      redux: boolean;
      javascript: boolean;
      styledComp: boolean;
      css: boolean;
      html: boolean;
    };
  }[];
}

export interface ProjectDTO {
  nome: string;
  imgFixa: string;
  imgGif: string;
  url: string;
  tecnologias: {
    typescript: boolean;
    react: boolean;
    redux: boolean;
    javascript: boolean;
    styledComp: boolean;
    css: boolean;
    html: boolean;
  };
}
