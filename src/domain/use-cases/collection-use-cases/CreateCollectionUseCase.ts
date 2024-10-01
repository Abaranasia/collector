import { Collection } from "../../entities/Collection";
import { 
  CollectionRepository, 
  CreateCollectionParams,
 } from "../../repositories/CollectionRepository";

export class CreateCollectionsUseCase {
    constructor(private collectionRepository: CollectionRepository){}

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