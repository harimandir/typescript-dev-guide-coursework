export class Attributes<T> {
  data: T;

  get(prop: string): string | number {
    return this.data[prop];
  }

  set(props: T): void {
    Object.assign(this.data, props);
  }
}
