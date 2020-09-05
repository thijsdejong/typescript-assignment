import { Pixel } from "./pixel";

class Bitmap {
  width: number;
  height: number;
  data: Pixel[][];

  constructor(width: number, height: number, data: Pixel[][]) {
    this.width = width;
    this.height = height;
    this.data = data;
  }

  print(): void {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        this.data[y][x].printstate();
      }
    }
  }
}

export { Bitmap };
