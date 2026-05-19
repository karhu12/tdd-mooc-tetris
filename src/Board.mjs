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
    return normalize(this.state);
  }

  drop(shape) {
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
