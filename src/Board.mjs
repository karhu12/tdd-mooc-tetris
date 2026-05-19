import { normalize } from "../test/testing.mjs";

const EMPTY_TILE = ".";

export class Board {
  width;
  height;
  shape;
  shapeYPosition;
  maxYPosition;
  tiles;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.maxYPosition = height - 1;
    this.tiles = Array.from(Array(this.height), () => new Array(this.width).fill(EMPTY_TILE));
  }

  getMiddle() {
    return Math.round(this.width / 2) - 1;
  }

  toString() {
    let state = '';
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        if (this.shape && this.shapeYPosition == y && this.getMiddle() == x)
          state += this.shape;
        else
          state += this.tiles[y][x];
      }
      state += '\n';
    }
    return state;
  }

  drop(shape) {
    if (this.shape) {
      throw new Error("already falling");
    }
    this.shape = shape;
    this.shapeYPosition = 0;
  }

  tick() {
    if (this.shapeYPosition < this.maxYPosition) {
      this.shapeYPosition++;
    } else {
      this.tiles[this.shapeYPosition][this.getMiddle()] = this.shape;
      this.shape = null;
    }
  }

  hasFalling() {
    return Boolean(this.shape);
  }
}
