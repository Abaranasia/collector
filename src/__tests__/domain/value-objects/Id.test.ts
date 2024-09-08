import { Id } from "../../../domain/value-objects/Id";


describe('Tests on Id value object', () => {
  test('should create a new Id', () => {
    const id = Id.create();

    expect(id.getValue()).toBeDefined();
  });

  test('should create a new Id with a value', () => {
    const id = Id.createFrom('123');

    expect(id.getValue()).toBe('123');
  });

  test('should compare two Ids', () => {
    const id1 = Id.createFrom('123');
    const id2 = Id.createFrom('123');

    expect(id1.equals(id2)).toBe(true);
  });

  test('should compare two different Ids', () => {
    const id1 = Id.createFrom('123');
    const id2 = Id.createFrom('456');

    expect(id1.equals(id2)).toBe(false);
  });
});
