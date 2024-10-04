import { GetCollectionsUseCase } from "../../../domain/use-cases/collection-use-cases/GetCollectionsUseCase";

describe("Tests on GetCollectionsUseCase", () => {
  const baseMockCollectionRepository = {
    createCollection: jest.fn(),
    updateCollection: jest.fn(),
    deleteCollection: jest.fn(),
    listCollections: jest.fn(),
  };

  test("should be called with default values and return a response", () => {
    const mockCollectionRepository = {
      ...baseMockCollectionRepository,
      listCollections: jest.fn().mockResolvedValue({
        data: [],
        total: 0,
      }),
    };
    const useCase = new GetCollectionsUseCase(mockCollectionRepository);

    const resp = useCase.execute({});

    expect(resp).resolves.toEqual({
      data: [],
      total: 0,
    });

    expect(mockCollectionRepository.listCollections).toHaveBeenCalledWith({
      params: { page: 1, count: 100 },
      headers: undefined,
    });
  });
  
  test("should be called with the provided values", () => {
    const mockCollectionRepository = {
        ...baseMockCollectionRepository,
        listCollections: jest.fn().mockResolvedValue({
        data: [
          {
            id: 123,
            name: 'Mistborn Series',
            author: 'Brandon Sanderson',
            category: 'book'
        }
        ],
        total: 1,
      }),
    };

    const inputProps = {
      params: {
        page: 2,
        count: 50,
      },
      headers: { "x-api-key": "123456" },
    };

    const useCase = new GetCollectionsUseCase(mockCollectionRepository);

    // @ts-expect-error
    const resp = useCase.execute(inputProps);

    expect(resp).resolves.toEqual({
      data: [
        {
            id: 123,
            name: 'Mistborn Series',
            author: 'Brandon Sanderson',
            category: 'book'
        }
      ],
      total: 1,
    });

    expect(mockCollectionRepository.listCollections).toHaveBeenCalledWith(inputProps);
  });

  test("should thrown an error if listCollections fails", () => {
    const mockCollectionRepository = {
      ...baseMockCollectionRepository,
      listCollections: jest.fn(() => {
        throw new Error();
      }),
    };

    const useCase = new GetCollectionsUseCase(mockCollectionRepository);

    const resp = useCase.execute({});

    expect(resp).rejects.toThrow();
  });
});
