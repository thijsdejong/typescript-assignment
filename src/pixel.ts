class Pixel {
  state: boolean;
  distance: number;

  constructor(state: boolean = false) {
    this.state = state;
    this.distance = 0;
  }

  printstate(): void {
    if (this.state == true) {
      process.stdout.write("1");
    } else {
      process.stdout.write("0");
    }
  }

  printDistance(): void {
    process.stdout.write(`${this.distance}`);
  }
}

export { Pixel };
