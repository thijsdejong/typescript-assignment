import { BitmapBuilder } from "../src/builders/bitmapbuilder";
import { BitmapHelper } from "../src/helpers/bitmaphelper";
import { Bitmap } from "../src/models/bitmap";
import { Pixel } from "../src/models/pixel";

describe("bitmap tests", () => {
  const write = process.stdout.write;

  beforeEach(() => {
    process.stdout.write = jest.fn();
  });

  afterAll(() => {
    process.stdout.write = write;
  });

  test("building bitmap, printing bitmap ", () => {
    let bitmap: Bitmap = new BitmapBuilder()
      .setWidth(4)
      .setHeight(3)
      .setData([
        [new Pixel(0), new Pixel(0), new Pixel(0), new Pixel(1)],
        [new Pixel(0), new Pixel(0), new Pixel(1), new Pixel(1)],
        [new Pixel(0), new Pixel(1), new Pixel(1), new Pixel(0)],
      ])
      .build();
    
    expect(bitmap.getWidth()).toBe(4);
    expect(bitmap.getHeight()).toBe(3);
    
    process.stdout.write(`${bitmap}`);
    expect(process.stdout.write).toHaveBeenLastCalledWith("0 0 0 1\n0 0 1 1\n0 1 1 0\n")

    process.stdout.write(`${BitmapHelper.createDistanceBitmapFromPixelBitmap(bitmap)}`);
    expect(process.stdout.write).toHaveBeenLastCalledWith("3 2 1 0\n2 1 0 0\n1 0 0 1\n")
  });
});
