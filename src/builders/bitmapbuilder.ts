import { Bitmap } from "../models/bitmap";
import { Pixel } from "../models/pixel";

export class BitmapBuilder {
  private width: number = 0;
  private height: number = 0;
  private data: Pixel[][] = [];

  public getWidth(): number {
    return this.width;
  }

  public setWidth(width: number): BitmapBuilder {
    this.width = width;

    return this;
  }

  public getHeight(): number {
    return this.height;
  }

  public setHeight(height: number): BitmapBuilder {
    this.height = height;

    return this;
  }

  public getData(): Pixel[][] {
    return this.data;
  }

  public setData(data: Pixel[][]): BitmapBuilder {
    this.data = data;

    return this;
  }

  public isBuildable(): boolean {
    return this.isNotEmpty() && this.dimensionsMatch();
  }

  private isNotEmpty(): boolean {
    return this.getWidth() > 0 && this.getHeight() > 0 && this.getData() !== [];
  }

  private dimensionsMatch(): boolean {
    return this.dimensionsMatchWidth() && this.dimensionsMatchHeight();
  }

  private dimensionsMatchWidth(): boolean {
    this.getData().forEach((row) => {
      if (row.length !== this.getWidth()) {
        return false;
      }
    });

    return true;
  }

  private dimensionsMatchHeight(): boolean {
    return this.getData().length === this.getHeight();
  }

  public build(): Bitmap {
    return new Bitmap(this);
  }
}
