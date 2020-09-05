import { Point } from "./point";

class Pixel {
  loc: Point;
  state: boolean;

  constructor(loc: Point, state: boolean = false) {
    this.loc = loc;
    this.state = state;
  }

  distanceTo(pixel: Pixel): number {
    return (
      Math.abs(this.loc.x - pixel.loc.x) + Math.abs(this.loc.y - pixel.loc.y)
    );
  }

  printstate(): void {
    if (this.state == true) {
      process.stdout.write("1");
    } else {
      process.stdout.write("0");
    }
  }
}

export { Pixel };
