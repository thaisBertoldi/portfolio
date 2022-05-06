export interface ReposDTO {
  dataRepos: {
    name: string;
    git_url: string;
    language: string | null;
  }[],
}

export interface ContextDTO {
    children: React.ReactNode;
}

export interface ModalRepositoriesDTO {
    onClick: Function | any;
}

export interface DataReposDTO {
  name: string,
  html_url: string, 
  language: string,
  updated_at: string
}