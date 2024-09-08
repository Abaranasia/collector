import { ValueObject } from "./ValueObject";

export interface TitleProps {
  value: string;
}

export class Title extends ValueObject<TitleProps> {
  private value: string;
  
  constructor(props: TitleProps) {
    super(props);
    this.value = props.value;

  }

  public static create(title: string): Title {
    if (!title || title.trim().length === 0) {
      throw new Error('Title is required');
    }
    return new Title({ value: title.trim() })
  }

  public getValue(): string {
    return this.value;
  }
}