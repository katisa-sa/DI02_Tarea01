export interface INoticia {
  status: string;
  totalResults: number;
  articles: IArticulo[];
}

export interface IArticulo {
  source: ISource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface ISource {
  id: string;
  name: string;
}
  