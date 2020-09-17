import { Pixel } from "./pixel";

class Bitmap {
  width: number;
  height: number;
  data: Pixel[][];

  constructor(width: number, height: number, data: Pixel[][]) {
    this.width = width;
    this.height = height;
    this.data = data;
    this.calculateDistance();
  }

  print(): void {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        this.data[y][x].printDistance();

        this.printSeparator(x);
      }
    }
  }

  private printSeparator(x: number): void {
    if (x == this.width - 1) {
      process.stdout.write("\n");
    } else {
      process.stdout.write(" ");
    }
  }

  private calculateDistance(): void {
    // for each pixel in the bitmap calculate distance between all pixels
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        let pixel = this.data[y][x];

        // if pixel is on, skip to next.
        if (pixel.state == true) {
          continue;
        }

        // set distance to the maximum possible.
        pixel.distance = this.width - 1 + this.height - 1;

        // for each pixel in the bitmap
        for (
          let target_y = 0;
          target_y < Math.min(this.height, y + pixel.distance);
          target_y++
        ) {
          // if the search location is further away than what we already found as closest, stop looking
          if (Math.abs(y - target_y) >= pixel.distance) {
            continue;
          }

          for (
            let target_x = Math.max(0, x - pixel.distance - 1);
            target_x < Math.min(this.width, x + pixel.distance);
            target_x++
          ) {
            // if the search location is further away than what we already found as closest, stop looking
            if (Math.abs(x - target_x) >= pixel.distance) {
              continue;
            }

            // if we're checking the pixels location, skip to next.
            if (y == target_y && x == target_x) {
              continue;
            }

            let target = this.data[target_y][target_x];

            //if the target is not turned on, skip to next.
            if (target.state == false) {
              continue;
            }

            let distance = Math.abs(x - target_x) + Math.abs(y - target_y);

            // if we found a closer white pixel
            if (distance < pixel.distance) {
              pixel.distance = distance;
            }
          }
        }
      }
    }
  }
}

export { Bitmap };
