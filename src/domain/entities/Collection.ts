import { Entity, EntityData } from "./Entity";

import { Id } from "../value-objects/Id";
import { Title } from "../value-objects/Title";
import { Author } from "../value-objects/Author";
import { Category } from "../value-objects/Category";

export interface CollectionData extends EntityData {
  name: Title;
  author: Author;
  category: Category;
}

export interface CollectionProps {
  id?: string;
  name: string;
  author: string;
  category: string;
}

export class Collection extends Entity {
  public readonly name: Title;
  public readonly author: Author;
  public readonly category: Category;

  constructor(data: CollectionData) {
    super(data.id);

    this.name = data.name;
    this.author = data.author;
    this.category = data.category;
  }

  static create(props: CollectionProps): Collection {
    const id = props.id ? Id.createFrom(props.id) : Id.create();
    const name = Title.create(props.name);
    const author = Author.create(props.author);
    const category = Category.create(props.category);

    return new Collection({
      id,
      name,
      author,
      category,
    });
  }

  public update(props: Partial<CollectionProps>) {
    const id = props.id ? Id.createFrom(props.id) : this.id;
    const name = props.name ? Title.create(props.name) : this.name;
    const author = props.author ? Author.create(props.author) : this.author;
    const category = props.category ? Category.create(props.category) : this.category;

    return new Collection({ id, name, author, category });
  }
}
