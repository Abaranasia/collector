import { ApiInstanceHeaders } from "../../../domain/entities/ApiInstance";
import { Collection } from "../../../domain/entities/Collection";
import { PaginatedObjects } from "../entities/Paginated";

export interface CollectionRepository {
  createCollection({ params, headers }: CreateCollectionParams): Promise<() => void>;
  updateCollection({ params, headers }: UpdateCollectionParams): Promise<() => void>;
  deleteCollection({ params, headers }: DeleteCollectionParams): Promise<() => void>;
  listCollections({
    params,
    headers,
  }: GetCollectionsParams): Promise<PaginatedObjects<Collection[]>>;
}

export interface CreateCollectionParams {
  params: {
    name: string;
    author: string;
    category: string;
  };
  headers?: ApiInstanceHeaders;
}

export interface UpdateCollectionParams {
  params: { id: string };
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
