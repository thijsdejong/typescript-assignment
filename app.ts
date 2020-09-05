import { Bitmap } from "./bitmap";
import { Pixel } from "./pixel";
import { Point } from "./point";

console.log("hello");

process.stdin.on("line", function (line: string) {
  console.log(line);
});

process.stdin.on("close", function () {
  console.log("close");
  // bitmap.print();
});

// const bitmap = new Bitmap(
//   4, // width
//   4, // height
//   [
//     [new Pixel(new Point(0,0)), new Pixel(new Point(1,0)), new Pixel(new Point(2,0)), new Pixel(new Point(3,0))],
//     [new Pixel(new Point(0,1)), new Pixel(new Point(1,1)), new Pixel(new Point(2,1)), new Pixel(new Point(3,1))],
//     [new Pixel(new Point(0,2)), new Pixel(new Point(1,2)), new Pixel(new Point(2,2)), new Pixel(new Point(3,2))],
//     [new Pixel(new Point(0,3)), new Pixel(new Point(1,3)), new Pixel(new Point(2,3)), new Pixel(new Point(3,3))],
//   ]
// );
