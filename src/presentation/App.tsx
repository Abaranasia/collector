import React, { useEffect } from 'react'
import {GetCollectionsUseCase} from '../domain/use-cases/collection-use-cases/GetCollectionsUseCase';
import {CreateCollectionUseCase} from '../domain/use-cases/collection-use-cases/CreateCollectionUseCase';
import  {CollectionRepository} from '../data/repository/CollectionRepository';
import { ApiInstance } from '../domain/entities/ApiInstance';
import axiosInstance from '../presentation/api/apiJsonServer';
import { CollectionRepositoryI } from '../domain/repositories/CollectionRepositoryI';
export const App = () => {

  const loadData = async ()  => {
    const collectionsApi: ApiInstance = axiosInstance;
    const collectionRepository: CollectionRepositoryI = new CollectionRepository(collectionsApi);
    
    const getUseCase = new GetCollectionsUseCase(collectionRepository)
    const data = await getUseCase.execute({});

    const params= {
      // id: "4",
      name: "The Hunger Games",
      author: "Suzanne Collins",
      category: "book",
    };

    const postUseCase = new CreateCollectionUseCase(collectionRepository)
    const newData = await postUseCase.execute({params});
    console.log('newData :>> ', newData);

    return data;
  };
  useEffect(() => {
    const data = loadData()
  }, [])
  
  return (
    <div>My App</div>
  )
}
