import { ValueObject } from "./ValueObject";

const categories = ["book", "album"];

export interface CategoryProps {
  value: string;
}

export class Category extends ValueObject<CategoryProps> {
  private constructor(props: CategoryProps) {
    super(props);
  }

  public static create(category: string): Category {
    if (!category || category.trim().length === 0) {
      throw new Error("Category is required");
    }
    if (category && categories.includes(category.toLowerCase()) == false) {
      throw new Error("Incorrect category");
    }

    return new Category({ value: category.trim() });
  }

  public getValue(): string {
    return this.props.value;
  }
}
