import { ApiInstance } from "../../domain/entities/ApiInstance";
import { Collection, CollectionProps } from "../../domain/entities/Collection";
import { PaginatedObjects } from "../../domain/entities/Paginated";
import {
  CollectionRepositoryI,
  CreateCollectionParams,
  DeleteCollectionParams,
  GetCollectionsParams,
  UpdateCollectionParams,
} from "../../domain/repositories/CollectionRepositoryI";

export class CollectionRepository implements CollectionRepositoryI {
  private api: ApiInstance;

  constructor(api: ApiInstance) {
    this.api = api;
  }
  async createCollection({ params, headers }: CreateCollectionParams) {
    console.log("params :>> ", params, headers);
    let collection = {};

    try {
      const { data } = await this.api.post("/collections", params);
      collection = this._mapToDomain(data);
      console.log("collections :>> ", collection);
    } catch (error) {
      console.warn("Unable to read collections: ", error);
    }
    return collection;

  }
  updateCollection({ params, headers }: UpdateCollectionParams) {
    console.log("params :>> ", params, headers);
  }
  deleteCollection({ params, headers }: DeleteCollectionParams) {
    console.log("params :>> ", params, headers);
  }

  async listCollections({ params }: GetCollectionsParams): Promise<PaginatedObjects<Collection[]>> {
    let collections = [];
    try {
      const { data } = await this.api.get("/collections", { params });
      collections = data.map((col: CollectionProps) => this._mapToDomain(col));

      console.log("collections :>> ", collections);
    } catch (error) {
      console.warn("Unable to read collections: ", error);
    }
    return collections;
  }

  private _mapToDomain(collection: CollectionProps): Collection {
    return Collection.create({
      id: collection.id,
      name: collection.name,
      author: collection.author,
      category: collection.category,
    });
  }
}
