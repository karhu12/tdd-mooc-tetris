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

  getBoardState() {
    
  }

  toString() {
    return normalize(this.state);
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
