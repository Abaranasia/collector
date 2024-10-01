import { Collection } from "../../entities/Collection";
import { CollectionRepository, GetCollectionsParams } from "../../repositories/CollectionRepository";
import { PaginatedObjects } from "../../entities/Paginated";

export class GetCollectionsUseCase {
    constructor(private collectionRepository: CollectionRepository){}

    async execute({ params, headers }: Partial<GetCollectionsParams>): Promise<PaginatedObjects<Collection[]>> {
        const page = params?.page ?? 1;
        const count = params?.count ?? 100;
    
        return this.collectionRepository.listCollections(
          {
            params: { page, count },
            headers
          }
        );
      }
}