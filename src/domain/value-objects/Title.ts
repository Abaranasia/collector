import { ValueObject } from "./ValueObject";

export interface TitleProps {
  value: string
}

export class Title extends ValueObject<TitleProps> {
  private constructor(props: TitleProps) {
    super(props)
  }

  public static create(title: string): Title {
    if (!title || title.trim().length === 0) {
      throw new Error('Title is required');
    }
    return new Title({ value: title.trim() })
  }

  public get title(): string {
    return this.props.value;
  }
}