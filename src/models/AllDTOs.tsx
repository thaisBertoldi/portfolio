export interface ReposDTO {
  dataRepos: {
    name: string;
    git_url: string;
    language: string | null;
  }[];
}

export interface ContextDTO {
  children: React.ReactNode;
}

export interface ModalRepositoriesDTO {
  onClick: Function | any;
}

export interface DataReposDTO {
  name: string;
  html_url: string;
  language: string;
  updated_at: string;
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

export interface EmailDTO {
  name: string;
  email: string;
  message: string;
}