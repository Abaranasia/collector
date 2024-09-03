export abstract class ValueObject<T> {
    protected props: T;
  
    constructor(props: T) {
      // this.props = Object (props);
      const baseProps: any = {
        ...props,
      };
      this.props = baseProps;
    }
  
    public equals(vo?: ValueObject<T>): boolean {
      if (vo === null || vo == undefined) {
        return false;
      }
  
      if (vo.props === undefined) {
        return false;
      }
  
      return JSON.stringify(this.props) === JSON.stringify(vo.props);
    }
  }