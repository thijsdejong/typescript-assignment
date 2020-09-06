import { Point } from "./point";

class Pixel {
  loc: Point;
  state: boolean;
  distance: number;

  constructor(loc: Point, state: boolean = false) {
    this.loc = loc;
    this.state = state;
    this.distance = 0;
  }

  distanceTo(target: Pixel): number {
    return (
      Math.abs(this.loc.x - target.loc.x) + Math.abs(this.loc.y - target.loc.y)
    );
  }

  printstate(): void {
    if (this.state == true) {
      process.stdout.write("1");
    } else {
      process.stdout.write("0");
    }
  }

  printDistance(): void {
    process.stdout.write(`${this.distance}`);
  }
}

export { Pixel };
