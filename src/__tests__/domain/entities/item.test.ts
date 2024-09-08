import { Item } from "../../../domain/entities/Item";
import { Id } from "../../../domain/value-objects/Id";
import { Title } from "../../../domain/value-objects/Title";

describe("Test on Item entity", () => {
  const newItem = {
    title: "The Final Empire",
    subtitle: "Mistborn Saga",
    length: "688",
    creationDate: 2006,
    collected: true,
    collection: "Mistborn series",
  };

  test("should create a full Item object with not provided id", () => {
    const book = Item.create(newItem);

    expect(book).toBeInstanceOf(Item);

    expect(book.id).toBeInstanceOf(Id);
    expect(book.title).toBeInstanceOf(Title);
    expect(book.subtitle).toBeInstanceOf(Title);

    expect(book.title.getValue()).toBe(newItem.title);
    expect(book.subtitle.getValue()).toBe(newItem.subtitle);
    expect(book.collected).toBe(true);
  });

  test("should update an existing item", () => {
    const newTitle = "The Well of Ascension";

    const book = Item.create(newItem);
    const updatedBook = book.update({ title: newTitle });

    expect(updatedBook.title).not.toBe(book.title);
    expect(updatedBook.id).toEqual(book.id);
    expect(updatedBook.title.getValue()).toBe(newTitle);
  });

  test('should throw an error when trying to create an item with invalid title', () => {
    const errorMsg = "Title is required";

    const invalidItem= {
        ...newItem,
        title: '',
      };
      
    expect(() => Item.create(invalidItem)).toThrow(errorMsg);
  });
});
