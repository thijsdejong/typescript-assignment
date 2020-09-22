import readline from "readline";
import { BitmapBuilder } from "./builders/bitmapbuilder";
import { inputState } from "./enums/inputstate";
import { BitmapHelper } from "./helpers/bitmaphelper";
import { ParserHelper } from "./helpers/parserhelper";
import { Bitmap } from "./models/bitmap";
import { Pixel } from "./models/pixel";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let state: inputState = inputState.TESTCASES;
let allBitmap: Bitmap[] = [];
let numberOfTestCases: number = 0;
let bitmapBuilder: BitmapBuilder;

rl.on("line", (input: string) => {
  try {
    switch (state) {
      case inputState.TESTCASES:
        numberOfTestCases = ParserHelper.getNumberOfTestcases(input);

        state = inputState.WIDTH_HEIGHT;
        break;

      case inputState.WIDTH_HEIGHT:
        bitmapBuilder = new BitmapBuilder();

        bitmapBuilder
          .setWidth(ParserHelper.getWidth(input))
          .setHeight(ParserHelper.getHeight(input));

        state = inputState.PIXELS;
        break;

      case inputState.PIXELS:
        let data: Pixel[][] = bitmapBuilder.getData();

        data.push(ParserHelper.getPixelRow(input, bitmapBuilder.getWidth()));

        bitmapBuilder.setData(data);

        if (bitmapBuilder.isBuildable()) {
          allBitmap.push(
            BitmapHelper.createDistanceBitmapFromPixelBitmap(
              bitmapBuilder.build()
            )
          );

          state = inputState.WIDTH_HEIGHT;
        }
        break;
    }
  } catch (error) {
    process.stderr.write(`${error}`);
    process.exit(1);
  }
});

rl.on("close", () => {
  try {
    if (numberOfTestCases === 0 || allBitmap.length !== numberOfTestCases) {
      throw new Error("Invalid amount of testcases");
    }

    allBitmap.forEach((bitmap: Bitmap) => {
      process.stdout.write(`${bitmap}`);
    });
  } catch (error) {
    process.stderr.write(`${error}`);
    process.exit(1);
  }
});
