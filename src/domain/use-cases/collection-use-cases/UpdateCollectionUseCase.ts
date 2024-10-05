import { Collection } from "../../entities/Collection";
import { 
  CollectionRepositoryI, 
  UpdateCollectionParams,
 } from "../../repositories/CollectionRepositoryI";

export class UpdateCollectionUseCase {
    constructor(private collectionRepository: CollectionRepositoryI){}

    async execute({ params, headers }: UpdateCollectionParams): Promise<Collection> {
        const id = params.id;
        const name = params?.name;
        const author = params?.author;
        const category = params?.category;
    
        return this.collectionRepository.updateCollection(
          {
            params: { id, name, author, category },
            headers
          }
        );
      }
}
