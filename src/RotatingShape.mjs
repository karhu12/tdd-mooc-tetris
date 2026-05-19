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
        const rows = this.toRows();
        this.width = Math.max(...rows.map((row) => row.length));
        this.height = rows.length;
    }

    toRows() {
        return this.toString().trimEnd().split("\n")
    }

    toString() {
        return normalize(this.shape);
    }

    rotateRight() {
        const rows = this.toRows()
        let newShape = '';
        for (let x = 0; x < this.width; x++) {
            for (let y = this.height - 1; y >= 0; y--) {
                newShape += rows[y][x];
            }
            newShape += '\n';
        }
        return new RotatingShape(newShape);
    }

    rotateLeft() {
        const rows = this.toRows()
        let newShape = '';
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                newShape += rows[y][this.width - 1 - x];
            }
            newShape += "\n";
        }
        return new RotatingShape(newShape);
    }
}