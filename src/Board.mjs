import { normalize } from "../test/testing.mjs";

export class Board {
  width;
  height;
  state;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.state = `...
                  ...
                  ...`;
  }

  toString() {
    let state = '';
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        state += '.';
      }
      state += '\n';
    }
    return state;
  }

  drop(shape) {
    if (shape === "Y")
      throw new Error("already falling")
    this.state = `.X.
                  ...
                  ...`;
  }

  tick() {
    this.state = `...
                  .X.
                  ...`;
  }
}
