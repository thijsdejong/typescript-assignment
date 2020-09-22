export class Pixel {
  private value: number;

  constructor(value: number) {
    this.value = value;
  }

  public getValue(): number {
    return this.value;
  }

  public setValue(value: number): void {
    this.value = value;
  }

  public toString(): string {
    return `${this.value}`;
  }
}
