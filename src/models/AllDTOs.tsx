export interface ReposDTO {
  dataRepos: {
    name: string;
    git_url: string;
    language: string | null;
  }[],
}

export type ContextDTO = {
    children: React.ReactNode;
}

export interface ModalRepositoriesDTO {
    onClick: Function | any;
}