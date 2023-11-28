export interface ITodo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export interface ISearchResult {
  organic_results: [
    {
      position: number;
      title: string;
      link: string;
      thumbnail: string;
      snippet: string;
    }
  ]
}

export interface IProduct {
  id?: string
  name: string
  description: string
  price: string
  createAt?: string
}