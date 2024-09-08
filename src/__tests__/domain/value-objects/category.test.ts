import { Category } from "../../../domain/value-objects/Category";

describe("Tests on Category value-object", () => {
  const newCategory = "Book";
  const noCategoryError = "Category is required";
  const invalidCategory = "Movie";
  const invalidCategoryError = "Incorrect category";

  test("should create a new category", () => {
    const category = Category.create(newCategory);
    expect(category.getValue()).toBeDefined();
    expect(category.getValue()).toBe(newCategory);
  });

  test("Throw an error on no category input", () => {
    expect(() => {
      Category.create('');
    }).toThrow(noCategoryError);
  });
  
   test("Throw an error on invalid category input", () => {
    expect(() => {
      Category.create(invalidCategory);
    }).toThrow(invalidCategoryError);
  }); 

  test("should compare two Categories", () => {
    const cat1 = Category.create(newCategory);
    const cat2 = Category.create(newCategory);

    expect(cat1.equals(cat2)).toBe(true);
  });

  test("should compare two different Categories", () => {
    const cat1 = Category.create(newCategory);
    const cat2 = Category.create("Album");

    expect(cat1.equals(cat2)).toBe(false);
  });
});
