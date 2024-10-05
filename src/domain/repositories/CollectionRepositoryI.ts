import { ApiInstanceHeaders } from "../entities/ApiInstance";
import { Collection } from "../entities/Collection";
import { PaginatedObjects } from "../entities/Paginated";

export interface CreateCollectionParams {
  params: {
    name: string;
    author: string;
    category: string;
  };
  headers?: ApiInstanceHeaders;
}

export interface UpdateCollectionParams {
  params: { 
    id: string,
    name?: string;
    author?: string;
    category?: string;
   };
  headers?: ApiInstanceHeaders;
}

export interface DeleteCollectionParams {
  params: { id: string };
  headers?: ApiInstanceHeaders;
}

export interface GetCollectionsParams {
    params: {
      page: number;
      count: number;
    };
    headers?: ApiInstanceHeaders;
  }

export interface CollectionRepositoryI {
  createCollection({ params, headers }: CreateCollectionParams): Promise<Collection>;
  updateCollection({ params, headers }: UpdateCollectionParams): Promise<Collection>;
  deleteCollection({ params, headers }: DeleteCollectionParams): Promise<() => void>;
  listCollections({
    params,
    headers,
  }: GetCollectionsParams): Promise<PaginatedObjects<Collection[]>>;
}