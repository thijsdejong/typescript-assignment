import { BitmapBuilder } from "../src/builders/bitmapbuilder";
import { BitmapHelper } from "../src/helpers/bitmaphelper";
import { ParserHelper } from "../src/helpers/parserhelper";
import { Bitmap } from "../src/models/bitmap";
import { Pixel } from "../src/models/pixel";

describe("parserHelper tests", () => {
  const write = process.stdout.write;

  beforeEach(() => {
    process.stdout.write = jest.fn();
  });

  afterAll(() => {
    process.stdout.write = write;
  });

  test("get number of test cases", () => {
    expect(() => { ParserHelper.getNumberOfTestcases("0") }).toThrowError();
    expect(ParserHelper.getNumberOfTestcases("1")).toBe(1);
    expect(ParserHelper.getNumberOfTestcases("42")).toBe(42);
    expect(ParserHelper.getNumberOfTestcases("1000")).toBe(1000);
    expect(() => { ParserHelper.getNumberOfTestcases("1001") }).toThrowError();
  });

  test("get height and width", () => {
    expect(() => { ParserHelper.getNumberOfTestcases("0 0") }).toThrowError();
    expect(() => { ParserHelper.getNumberOfTestcases("0 1") }).toThrowError();
    expect(() => { ParserHelper.getNumberOfTestcases("1 0") }).toThrowError();

    expect(ParserHelper.getHeight("1 1")).toBe(1);
    expect(ParserHelper.getWidth("1 1")).toBe(1);

    expect(ParserHelper.getHeight("3 4")).toBe(3);
    expect(ParserHelper.getWidth("3 4")).toBe(4);

    expect(ParserHelper.getHeight("182 182")).toBe(182);
    expect(ParserHelper.getWidth("182 182")).toBe(182);

    expect(() => { ParserHelper.getNumberOfTestcases("3 183") }).toThrowError();
    expect(() => { ParserHelper.getNumberOfTestcases("183 3") }).toThrowError();
    expect(() => { ParserHelper.getNumberOfTestcases("183 183") }).toThrowError();
  });

  test("get pixelrow", () => {
    expect(() => { ParserHelper.getPixelRow("0011", 3) }).toThrowError();

    expect(ParserHelper.getPixelRow("0011", 4)).toMatchObject([new Pixel(0), new Pixel(0), new Pixel(1), new Pixel(1)]);
    expect(ParserHelper.getPixelRow("1100", 4)).toMatchObject([new Pixel(1), new Pixel(1), new Pixel(0), new Pixel(0)]);
    expect(ParserHelper.getPixelRow("0110", 4)).toMatchObject([new Pixel(0), new Pixel(1), new Pixel(1), new Pixel(0)]);

    expect(() => { ParserHelper.getPixelRow("0211", 4) }).toThrowError();

  });
});
