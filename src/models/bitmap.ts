import { BitmapBuilder } from "../builders/bitmapbuilder";
import { Pixel } from "./pixel";

export class Bitmap {
  private width: number;
  private height: number;
  private data: Pixel[][];

  constructor(bitmapBuilder: BitmapBuilder) {
    this.width = bitmapBuilder.getWidth();
    this.height = bitmapBuilder.getHeight();
    this.data = bitmapBuilder.getData();
  }

  public getWidth(): number {
    return this.width;
  }

  public getHeight(): number {
    return this.height;
  }

  public getPixel(x: number, y: number): Pixel {
    return this.data[y][x];
  }

  public toString(): string {
    let output: string = "";

    for (let y = 0; y < this.getHeight(); y++) {
      for (let x = 0; x < this.getWidth(); x++) {
        output =
          output +
          `${this.getPixel(x, y).getDistance()}` +
          this.getSeperatorByX(x);
      }
    }
    return output;
  }

  private getSeperatorByX(x: number): string {
    if (x == this.getWidth() - 1) {
      return "\n";
    } else {
      return " ";
    }
  }
}
