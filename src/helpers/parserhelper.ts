import { Pixel } from "../models/pixel";

export class ParserHelper {
  public static getNumberOfTestcases(input: string): number {
    let matches = input.match("^(?<numberOfTestCases>\\d+)$");

    if (matches === null) {
      throw new Error("Unable to parse number of test cases.");
    }

    let numberOfTestCases = Number(matches?.groups?.numberOfTestCases);

    if (
      numberOfTestCases === NaN ||
      numberOfTestCases < 1 ||
      numberOfTestCases > 1000
    ) {
      throw new Error("Invalid number of test cases.");
    }

    return numberOfTestCases;
  }

  public static getWidth(input: string): number {
    let width = Number(this.getHeightAndWidthMatches(input).groups?.width);

    if (width === NaN || width < 1 || width > 182) {
      throw new Error("Invalid width.");
    }

    return width;
  }

  public static getHeight(input: string): number {
    let height = Number(this.getHeightAndWidthMatches(input).groups?.height);

    if (height === NaN || height < 1 || height > 182) {
      throw new Error("Invalid height.");
    }

    return height;
  }

  private static getHeightAndWidthMatches(input: string): RegExpMatchArray {
    let matches = input.match("^(?<height>\\d+) (?<width>\\d+)$");

    if (matches === null) {
      throw new Error("Unable to parse height and width.");
    }

    return matches;
  }

  public static getPixelRow(input: string, width: number): Pixel[] {
    let matches = input.match("^[01]{" + width + "}$");

    if (matches === null) {
      throw new Error("Unable to parse row of pixels.");
    }

    let pixelRow = matches.input;

    if (pixelRow === undefined) {
      throw new Error("Unable to parse row of pixels.");
    }

    return this.createPixelArrayFromString(input);
  }

  private static createPixelArrayFromString(input: string): Pixel[] {
    let array: Pixel[] = [];

    for (let i = 0; i < input.length; i++) {
      array.push(new Pixel(Number(input[i])));
    }

    return array;
  }
}
