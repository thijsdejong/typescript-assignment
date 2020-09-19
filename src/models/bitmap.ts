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

    this.calculateDistance();
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

  private calculateDistance(): void {
    // for each pixel in the bitmap calculate distance between all pixels
    for (let y = 0; y < this.getHeight(); y++) {
      for (let x = 0; x < this.getWidth(); x++) {
        let pixel = this.getPixel(x, y);

        // if pixel is on, skip to next.
        if (pixel.getState() == true) {
          continue;
        }

        // set distance to the maximum possible.
        pixel.setDistance(this.getWidth() - 1 + this.getHeight() - 1);

        // for each pixel in the bitmap
        for (
          let target_y = 0;
          target_y < Math.min(this.getHeight(), y + pixel.getDistance());
          target_y++
        ) {
          // if the search location is further away than what we already found as closest, stop looking
          if (Math.abs(y - target_y) >= pixel.getDistance()) {
            continue;
          }

          for (
            let target_x = Math.max(0, x - pixel.getDistance() - 1);
            target_x < Math.min(this.getWidth(), x + pixel.getDistance());
            target_x++
          ) {
            // if the search location is further away than what we already found as closest, stop looking
            if (Math.abs(x - target_x) >= pixel.getDistance()) {
              continue;
            }

            // if we're checking the pixels location, skip to next.
            if (y == target_y && x == target_x) {
              continue;
            }

            let target = this.getPixel(target_x, target_y);

            //if the target is not turned on, skip to next.
            if (target.getState() == false) {
              continue;
            }

            let distance = Math.abs(x - target_x) + Math.abs(y - target_y);

            // if we found a closer white pixel
            if (distance < pixel.getDistance()) {
              pixel.setDistance(distance);
            }
          }
        }
      }
    }
  }
}
