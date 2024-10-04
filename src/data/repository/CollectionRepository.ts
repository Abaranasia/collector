import { ApiInstance } from "../../domain/entities/ApiInstance";
import { Collection } from "../../domain/entities/Collection";
import { PaginatedObjects } from "../../domain/entities/Paginated";
import {
  CollectionRepositoryI,
  GetCollectionsParams,
} from "../../domain/repositories/CollectionRepositoryI";
import { ApiCollection, ApiCollectionResponse } from "./ApiCollection";

export class CollectionRepository implements CollectionRepositoryI {
  private api: ApiInstance;

  constructor(api: ApiInstance) {
    this.api = api;
  }
  createCollection() {}
  updateCollection() {}
  deleteCollection() {}

  listCollections({
    params,
    headers,
  }: GetCollectionsParams): Promise<PaginatedObjects<Collection[]>> {
    fetch("http://localhost:3000/collections")
      .then((response) => response.json())
      .then((collections) => console.log(collections));
    /*  return Promise.resolve({
      objects: collections.embedded.map((collection) => this._mapToDomain(collection)),
      pagination: {
        count: collections._meta.count,
        total: collections._meta.total,
      },
    }); */
  }

  private _mapToDomain(collection: ApiCollection) {
    return Collection.create({
      id: collection.id,
      name: collection.name,
      author: collection.author,
      category: collection.category,
    });
  }
}

const collections: ApiCollectionResponse = {
  embedded: [
    {
      id: "1",
      name: "Mistborn series 1",
      author: "Brandon Sanderson",
      category: "book",
    },
    {
      id: "2",
      name: "Stormlight Archive",
      author: "Brandon Sanderson",
      category: "book",
    },
    {
      id: "3",
      name: "Skyward",
      author: "Brandon Sanderson",
      category: "book",
    },
  ],
  _meta: {
    count: 30,
    total: 30,
  },
};
