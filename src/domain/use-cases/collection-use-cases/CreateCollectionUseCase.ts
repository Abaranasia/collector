import { Collection } from "../../entities/Collection";
import { 
  CollectionRepositoryI, 
  CreateCollectionParams,
 } from "../../repositories/CollectionRepositoryI";

export class CreateCollectionsUseCase {
    constructor(private collectionRepository: CollectionRepositoryI){}

    async execute({ params, headers }: CreateCollectionParams): Promise<Collection> {
        const name = params.name;
        const author = params.author;
        const category = params.category;
    
        return this.collectionRepository.createCollection(
          {
            params: { name, author, category },
            headers
          }
        );
      }
}