import { ValueObject } from "./ValueObject";

export interface AuthorProps {
  value: string
}

export class Author extends ValueObject<AuthorProps> {
  private constructor(props: AuthorProps) {
    super(props)
  }

  public static create(author: string): Author {
    if (!author || author.trim().length === 0) {
      throw new Error('Author is required');
    }
    return new Author({ value: author.trim() })
  }
  
  public get author(): string {
    return this.props.value;
  }
}