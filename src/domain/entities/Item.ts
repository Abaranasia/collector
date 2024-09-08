import { Entity, EntityData }  from './Entity';

import { Title } from '../value-objects/Title';
import { Id } from '../value-objects/Id';

export interface ItemData extends EntityData {
  title: Title;
  subtitle: Title;
  length: string;
  creationDate: number;
  collected: boolean;
  collectionId: string;
}

export interface ItemProps {
  id?: string;
  title: string;
  subtitle: string;
  length: string;
  creationDate: number;
  collected: boolean;
  collectionId: string;
}

export class Item extends Entity {
  public readonly title: Title;
  public readonly subtitle: Title;
  public readonly length: string;
  public readonly creationDate: number;
  public readonly collected: boolean;
  public readonly collectionId: string;

  constructor(data: ItemData) {
    super(data.id);

    this.title = data.title;
    this.subtitle = data.subtitle;
    this.length = data.length;
    this.creationDate = data.creationDate;
    this.collected = data.collected;
    this.collectionId = data.collectionId;
  }

  static create(props: ItemProps): Item {
    // Review if it worths to create an itemId value-object based on Id
    const id = props.id ? Id.createFrom(props.id) : Id.create();
    const title = Title.create(props.title);
    const subtitle = Title.create(props.subtitle);
    const { length } = props;
    const { creationDate } = props;
    const { collected } = props;
    const { collectionId } = props;

    return new Item({
      id,
      title,
      subtitle,
      length,
      creationDate,
      collected,
      collectionId,
    });
  }

  public update(props: Partial<ItemProps>) {
    // Allows the updating process of an existing item
    const id = props.id ? Id.createFrom(props.id) : this.id;
    const title = props.title ? Title.create(props.title) : this.title;
    const subtitle = props.subtitle
      ? Title.create(props.subtitle)
      : this.subtitle;
    const length = props.length ?? this.length;
    const creationDate = props.creationDate ?? this.creationDate;
    const collected = props.collected ?? this.collected;
    const collectionId = props.collectionId ?? this.collectionId;

    return new Item({
      id,
      title,
      subtitle,
      length,
      creationDate,
      collected,
      collectionId,
    });
  }
}
