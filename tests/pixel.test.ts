import { Pixel } from "../src/models/pixel";

describe("pixel tests", () => {
  const write = process.stdout.write;

  beforeEach(() => {
    process.stdout.write = jest.fn();
  });

  afterAll(() => {
    process.stdout.write = write;
  });

  describe("state print tests", () => {
    test("state off", () => {
      let pixel = new Pixel(false);

      pixel.printstate();

      expect(process.stdout.write).toHaveBeenCalledWith("0");
    });

    test("state on", () => {
      let pixel = new Pixel(true);

      pixel.printstate();

      expect(process.stdout.write).toHaveBeenCalledWith("1");
    });
  });

  describe("distance print tests", () => {
    test("distance 0", () => {
      let pixel = new Pixel(false);

      pixel.distance = 0;

      pixel.printDistance();

      expect(process.stdout.write).toHaveBeenCalledWith("0");
    });

    test("distance 1", () => {
      let pixel = new Pixel(true);

      pixel.distance = 1;

      pixel.printDistance();

      expect(process.stdout.write).toHaveBeenCalledWith("1");
    });

    test("distance 181", () => {
      let pixel = new Pixel(true);

      pixel.distance = 181;

      pixel.printDistance();

      expect(process.stdout.write).toHaveBeenCalledWith("181");
    });
  });
});
