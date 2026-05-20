import { normalize } from "../test/testing.mjs";
import { EMPTY_TILE } from "./Constants.mjs";
import { RotatingShape } from "./RotatingShape.mjs";

export class Board {
  width;
  height;
  shape;
  shapeYPosition;
  shapeXPosition;
  maxYPosition;
  tiles;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.maxYPosition = height - 1;
    this.tiles = Array.from(Array(this.height), () => new Array(this.width).fill(EMPTY_TILE));
  }

  getMiddle() {
    return Math.round(this.width / 2 - 1);
  }

  toString() {
    let state = '';
    const shapeOn = this.shape ? this.shape.toRows().map((v, i) => v.split('').map((vv, ii) => [this.shapeYPosition + i, this.shapeXPosition + ii])).flat() : [];
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        if (shapeOn.some((on) => on[0] === y && on[1] === x))
          state += this.shape.toRows()[y - this.shapeYPosition][x - this.shapeXPosition];
        else
          state += this.tiles[y][x];
      }

      if (y + 1 < this.height)
        state += '\n';
    }
    return state;
  }

  drop(shape) {
    if (this.shape) {
      throw new Error("already falling");
    }
    this.shape = shape instanceof RotatingShape ? shape : new RotatingShape(shape);
    this.shapeYPosition = 0;
    this.shapeXPosition = this.getMiddle() - Math.round(this.shape.width / 2 - 1);
  }

  isFallingBlocked() {
    return this.tiles[this.shapeYPosition + 1][this.shapeXPosition] !== EMPTY_TILE;
  }

  tick() {
    if (this.shapeYPosition < this.maxYPosition && !this.isFallingBlocked()) {
      this.shapeYPosition++;
    } else {
      this.tiles[this.shapeYPosition][this.shapeXPosition] = this.shape;
      this.shape = null;
    }
  }

  hasFalling() {
    return Boolean(this.shape);
  }
}
