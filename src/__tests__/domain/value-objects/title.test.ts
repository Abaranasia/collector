import { Title } from "../../../domain/value-objects/Title";

describe("Tests on Title value object", () => {
  const newTitle = "Mistborn";
  const invalidTitle = "  Mistborn  ";
  const errorMsg = "Title is required";

  test("should create a new title", () => {
    const title = Title.create(newTitle);

    expect(title.getValue()).toBeDefined();
    expect(title.getValue()).toBe(newTitle);
  });

  test("should create a valid title from an untrimmed input", () => {
    const title = Title.create(invalidTitle);

    expect(title.getValue()).toBe(newTitle);
  });

  test("should return an error when no title is provided", () => {
    expect(() => {
      Title.create("");
    }).toThrow(errorMsg);
  });

  test("should compare two titles", () => {
    const title1 = Title.create(newTitle);
    const title2 = Title.create(newTitle);

    expect(title1.equals(title2)).toBe(true);
  });

  test("should compare two different titles", () => {
    const title1 = Title.create(newTitle);
    const title2 = Title.create("Elantris");

    expect(title1.equals(title2)).toBe(false);
  });
});
