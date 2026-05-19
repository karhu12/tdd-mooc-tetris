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
    this.tiles = Array(this.height).fill(Array(this.width).fill(EMPTY_TILE));
  }

  getMiddle() {
    return Math.round(this.width / 2) - 1;
  }

  toString() {
    let state = '';
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        if (this.shapeYPosition == y && this.getMiddle() == x)
          state += 'X';
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
    this.shapeYPosition++;
  }

  hasFalling() {
    return true;
  }
}
