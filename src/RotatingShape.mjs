import { normalize } from "../test/testing.mjs";
import { EMPTY_TILE } from "./Constants.mjs";

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

            if (x + 1 < this.width)
                newShape += "\n";
        }
        return new RotatingShape(newShape);
    }

    /* Returns all x/y positions that this shape affects relative to it's position on parent */
    positionsRelativeTo(x, y) {
        return this.toRows().map((v, i) => v.split('').map((vv, ii) => [y + i, x + ii])).flat();
    }

    /* True if any shape part overlaps with the given x/y relative to starting x/y on parent */
    isOnRelativePos(x, y, startX, startY, ignoreEmpty = true) {
        const onPositions = this.positionsRelativeTo(startX, startY);
        const onRelative = onPositions.some((on) => on[0] === y && on[1] === x)
        if (ignoreEmpty)
            return onRelative && this.getRelativePosValue(x, y, startX, startY) !== EMPTY_TILE
        return onRelative
    }

    /**Returns x/y position value from the shape relative to parent */
    getRelativePosValue(x, y, startX, startY) {
        return this.toRows()[y - startY][x - startX];
    }
}