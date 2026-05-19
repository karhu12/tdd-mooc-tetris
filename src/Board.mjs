import { normalize } from "../test/testing.mjs";

const EMPTY_TILE = ".";

export class Board {
  width;
  height;
  shapeYPosition;
  tiles;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.tiles = Array(this.height).fill(Array(this.width).fill(EMPTY_TILE));
  }

  toString() {
    const middle = Math.round(this.width / 2) - 1;
    let state = '';
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        if (this.shapeYPosition == y && middle == x)
          state += 'X';
        else
          state += this.tiles[y][x];
      }
      state += '\n';
    }
    return state;
  }

  drop(shape) {
    if (shape === "Y")
      throw new Error("already falling");
    this.shapeYPosition = 0;
  }

  tick() {
    this.shapeYPosition++;
  }

  hasFalling() {
    return true;
  }
}
