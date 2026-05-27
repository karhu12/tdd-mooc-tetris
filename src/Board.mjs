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
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        if (this.shape && this.shape.isOnRelativePos(x, y, this.shapeXPosition, this.shapeYPosition))
          state += this.shape.getRelativePosValue(x, y, this.shapeXPosition, this.shapeYPosition);
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
    const onPositions = this.shape.positionsRelativeTo(this.shapeXPosition, this.shapeYPosition, true);
    const noOverlapPositions = onPositions.filter((x, y) => !onPositions.some((ox, oy) => ox === x && oy === y + 1))

    for (let [x, y] of noOverlapPositions) {
      const newY = y + 1;
      if (newY > this.maxYPosition)
        continue;

      if (this.tiles[newY][x] !== EMPTY_TILE) {
        return true;
      }
    };

    return false;
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
