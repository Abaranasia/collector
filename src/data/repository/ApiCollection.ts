export interface ApiCollection {
    id: string;
    author: string;
    name: string;
    category: string;
  }
  
  export interface ApiCollectionResponse {
    embedded: ApiCollection[],
    _meta: {
      count: number,
      total: number,
    }
  }