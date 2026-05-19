export class RotatingShape {
    static fromString(shapeString) {
        return new RotatingShape(shapeString);
    }

    shape;

    constructor(shape) {
        this.shape = shape;
    }

    toString() {
        return "";
    }
}