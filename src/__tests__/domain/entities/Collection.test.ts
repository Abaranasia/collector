import { Collection } from "../../../domain/entities/Collection";
import { Author } from "../../../domain/value-objects/Author";
import { Id } from "../../../domain/value-objects/Id";
import { Title } from "../../../domain/value-objects/Title";

describe("Test on Collection entity", () => {
  const newCollection = {
    name: "Mistborn series",
    author: "Brandon Sanderson",
    category: "books",
  };

  test("should create a Collection with not provided id", () => {
    const mistbornBooks = Collection.create(newCollection);
    
    expect(mistbornBooks).toBeInstanceOf(Collection);
    expect(mistbornBooks.id).toBeInstanceOf(Id);
    expect(mistbornBooks.name).toBeInstanceOf(Title);
    expect(mistbornBooks.author).toBeInstanceOf(Author);
    
    expect(mistbornBooks.name.getValue()).toBe(newCollection.name);
    expect(mistbornBooks.author.getValue()).toBe(newCollection.author);
    expect(mistbornBooks.category).toBe(newCollection.category);
  });

  test("should update an existing Collection", () => {
    const mistbornBooks = Collection.create(newCollection);
    const newName ='The Mistborn Series';

    const updatedCollection = mistbornBooks.update({name: newName});

    expect(updatedCollection.id).toEqual(mistbornBooks.id);
    expect(updatedCollection.author).toEqual(mistbornBooks.author);
    expect(updatedCollection.name.getValue()).not.toBe(newCollection.name);
    expect(updatedCollection.name.getValue()).toBe(newName);
  });

  test('should throw an error when trying to create a collection withour name', () => {
    const errorMsg = "Title is required";

    const invalidCollection= {
        ...newCollection,
        name: '',
      };
      
    expect(() => Collection.create(invalidCollection)).toThrow(errorMsg);
  });

  test('should throw an error when trying to create a collection withour author', () => {
    const errorMsg = "Author is required";

    const invalidCollection= {
        ...newCollection,
        author: '',
      };
      
    expect(() => Collection.create(invalidCollection)).toThrow(errorMsg);
  });
});
