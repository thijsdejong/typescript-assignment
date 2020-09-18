import { Bitmap } from "./models/bitmap";
import { Pixel } from "./models/pixel";

function invalidInput(): number {
  console.log(
    "The input in formatted incorrectly or does not respect the set limits."
  );

  return 1;
}

let allBitmap: Bitmap[] = [];

let input: string = "";
process.stdin.on("data", function (line: string) {
  input += line;
});

process.stdin.on("close", function () {
  // check if input format is valid. Does not check validity of row width or amount of rows with what is put in.
  const matches = input.match(
    "^([1-9]|[1-8][0-9]|9[0-9]|[1-8][0-9]{2}|9[0-8][0-9]|99[0-9]|1000)\n(?:([1-9]|[1-8][0-9]|9[0-9]|1[0-7][0-9]|18[0-2]) ([1-9]|[1-8][0-9]|9[0-9]|1[0-7][0-9]|18[0-2])\n([01]{1,182}\n)+)+$"
  );
  if (matches == null) {
    process.exit(invalidInput());
  }

  let allInput = input.split("\n");

  let numberOfTestCases: number = Number(allInput.shift());

  for (
    let numberOfTestCase = 0;
    numberOfTestCase < numberOfTestCases;
    numberOfTestCase++
  ) {
    let dimension = allInput.shift()!;

    // check if we receive 2 valid numbers
    if (
      dimension.match(
        "^([1-9]|[1-8][0-9]|9[0-9]|1[0-7][0-9]|18[0-2]) ([1-9]|[1-8][0-9]|9[0-9]|1[0-7][0-9]|18[0-2])$"
      ) == null
    ) {
      process.exit(invalidInput());
    }

    let allDimension = dimension.split(" ");

    let height: number = Number(allDimension[0]);
    let width: number = Number(allDimension[1]);

    let data: Pixel[][] = new Array(height);

    for (let y = 0; y < height; y++) {
      data[y] = new Array(width);

      let row = allInput.shift()!;

      if (row.match("^[01]{1,182}$") == null || row.length != width) {
        process.exit(invalidInput());
      }

      for (let x = 0; x < row.length; x++) {
        data[y][x] = new Pixel(row[x] == "0" ? false : true);
      }
    }

    allBitmap.push(new Bitmap(width, height, data));
  }

  if (!(allInput.length == 1 && allInput[0] == "")) {
    process.exit(invalidInput());
  }

  for (
    let numberOfBitmap = 0;
    numberOfBitmap < allBitmap.length;
    numberOfBitmap++
  ) {
    allBitmap[numberOfBitmap].print();
  }
});

process.stdin.resume();
