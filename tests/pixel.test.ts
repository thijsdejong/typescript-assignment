import { Pixel } from "../src/models/pixel";

describe("pixel tests", () => {
  const write = process.stdout.write;

  beforeEach(() => {
    process.stdout.write = jest.fn();
  });

  afterAll(() => {
    process.stdout.write = write;
  });

  test("value setting, getting and printing", () => {
    let initialValue = 0;
    let newValue = 42;
    let pixel = new Pixel(initialValue);

    expect(pixel.getValue()).toBe(0);
    pixel.setValue(newValue);
    expect(pixel.getValue()).toBe(newValue);

    process.stdout.write(`${pixel}`);

    expect(process.stdout.write).toHaveBeenCalledWith(`${newValue}`);
  });
});
