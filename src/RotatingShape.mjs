import { normalize } from "../test/testing.mjs";

export class RotatingShape {
    static fromString(shapeString) {
        return new RotatingShape(shapeString);
    }

    shape;
    width;
    height;

    constructor(shape) {
        this.shape = shape;
        const rows = this.toString().trimEnd().split("\n");
        this.width = Math.max(...rows.map((row) => row.length));
        this.height = rows.length;
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