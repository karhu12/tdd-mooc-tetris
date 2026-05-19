import { normalize } from "../test/testing.mjs";

export class RotatingShape {
    static fromString(shapeString) {
        return new RotatingShape(shapeString);
    }

    shape;

    constructor(shape) {
        this.shape = shape;
    }

    toString() {
        return normalize(this.shape);
    }

    rotateRight() {
        return new RotatingShape(`GDA
                                  HEB
                                  IFC`);
    }

    rotateLeft() {
        return new RotatingShape(`CFI
                                  BEH
                                  ADG`);
    }
}