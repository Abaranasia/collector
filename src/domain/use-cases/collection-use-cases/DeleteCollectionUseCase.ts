import { 
  CollectionRepositoryI, 
  DeleteCollectionParams,
 } from "../../repositories/CollectionRepositoryI";

export class DeleteCollectionsUseCase {
    constructor(private collectionRepository: CollectionRepositoryI){}

    async execute({ params, headers }: DeleteCollectionParams): Promise<() => void> {
        const id = params.id;
            
        return this.collectionRepository.deleteCollection(
          {
            params: { id },
            headers
          }
        );
      }
}