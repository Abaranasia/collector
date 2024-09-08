import { Author } from '../../../domain/value-objects/Author';


describe("Tests on Author value object", () => {
  const newAuthor = "Brandon Sanderson";
  const invalidAuthor = "  Brandon Sanderson  ";
  const errorMsg = "Author is required";

  test("should create a new author", () => {
    const author = Author.create(newAuthor);

    expect(author.getValue()).toBeDefined();
    expect(author.getValue()).toBe(newAuthor);
  });

  test("should create a valid author from an untrimmed input", () => {
    const author = Author.create(invalidAuthor);

    expect(author.getValue()).toBe(newAuthor);
  });

  test("should return an error when no author is provided", () => {
    expect(() => {
      Author.create("");
    }).toThrow(errorMsg);
  });

  test("should compare two authors", () => {
    const author1 = Author.create(newAuthor);
    const author2 = Author.create(newAuthor);

    expect(author1.equals(author2)).toBe(true);
  });

  test("should compare two different authors", () => {
    const author1 = Author.create(newAuthor);
    const author2 = Author.create("Elantris");

    expect(author1.equals(author2)).toBe(false);
  });
});
