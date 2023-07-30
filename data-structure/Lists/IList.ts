export interface IList<T> {
  length: number;
  insert: Function;
  delete: Function;
  search: Function;
  update: Function;

  toString: VoidFunction;
  log: Function;
}
