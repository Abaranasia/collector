import { Collection } from "../../entities/Collection";
import { CollectionRepositoryI, GetCollectionsParams } from "../../repositories/CollectionRepositoryI";
import { PaginatedObjects } from "../../entities/Paginated";

export class GetCollectionsUseCase {
    constructor(private collectionRepository: CollectionRepositoryI){}

    async execute({ params, headers }: Partial<GetCollectionsParams>): Promise<PaginatedObjects<Collection[]> | []> {
        const page = params?.page ?? 1;
        const per_page = params?.per_page ?? 100;
    
        return this.collectionRepository.listCollections(
          {
            params: { page, per_page },
            headers
          }
        );
      }
}