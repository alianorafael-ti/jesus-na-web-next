export type Estudo = {
  id: string;
  slug: string;
  titulo: string;
  subtitulo?: string;
  resumo: string;

  categoria: string;
  subcategoria?: string;

  temas: string[];
  palavrasChave: string[];
  referenciasBiblicas?: string[];

  autor: string;

  dataPublicacao: string;
  dataAtualizacao?: string;

  imagem?: string;

  destaque?: boolean;

  serie?: string;

  ordemNaSerie?: number;

  conteudo: string;
};
