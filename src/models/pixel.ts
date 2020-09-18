export class Pixel {
  private state: boolean;
  private distance: number;

  constructor(state: boolean = false) {
    this.state = state;
    this.distance = 0;
  }

  public getState(): boolean {
    return this.state;
  }

  public getDistance(): number {
    return this.distance;
  }

  public setDistance(distance: number): void {
    this.distance = distance;
  }

  public printstate(): void {
    if (this.getState() == true) {
      process.stdout.write("1");
    } else {
      process.stdout.write("0");
    }
  }

  public printDistance(): void {
    process.stdout.write(`${this.getDistance()}`);
  }
}
