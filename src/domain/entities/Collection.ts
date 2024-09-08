import { Entity, EntityData } from "./Entity";

import { Id } from "../value-objects/Id";
import { Title } from "../value-objects/Title";
import { Author } from "../value-objects/Author";

export interface CollectionData extends EntityData {
  name: Title;
  author: Author;
  category: string;
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
  public readonly category: string;

  constructor(data: CollectionData) {
    super(data.id);

    this.name = data.name;
    this.author = data.author;
    this.category = data.category; // TODO: category value-object for book/album values
  }

  static create(props: CollectionProps): Collection {
    const id = props.id ? Id.createFrom(props.id) : Id.create();
    const name = Title.create(props.name);
    const author = Author.create(props.author);
    const { category } = props;

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
    const category = props.category ?? this.category;

    return new Collection({ id, name, author, category });
  }
}
