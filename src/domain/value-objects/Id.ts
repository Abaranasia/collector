export interface IdProps {
    value: string;
  }
  
  export class Id {
    private value: string;
  
    constructor(props: IdProps) {
      this.value = props.value;
    }
  
    public static create(): Id {
      return new Id({ value: new Date().getTime().toString() });
    }
  
    public static createFrom(value: string): Id {
      return new Id({ value });
    }
  
    public equals(id: Id): boolean {
      return this.value === id.value;
    }
  
    public getValue(): string {
      return this.value;
    }
  }
  