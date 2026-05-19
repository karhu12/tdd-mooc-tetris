import { normalize } from "../test/testing.mjs";

export class Board {
  width;
  height;
  shapeYPosition;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  toString() {
    const middle = Math.round(this.width / 2) - 1;
    let state = '';
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        if (this.shapeYPosition == y && middle == x)
          state += 'X';
        else
          state += '.';
      }
      state += '\n';
    }
    return state;
  }

  drop(shape) {
    if (shape === "Y")
      throw new Error("already falling")
    this.shapeYPosition = 0;
  }

  tick() {
    this.shapeYPosition++;
  }
}
