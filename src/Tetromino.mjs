import { RotatingShape } from "./RotatingShape.mjs"

export class Tetromino {
    static BLOCK_SHAPE = new RotatingShape(`X`);
    static T_SHAPE = new RotatingShape(`.T.
                                        TTT
                                        ...`);

    static I_SHAPE = new RotatingShape(`....
                                        ....
                                        IIII
                                        ....
                                        ....`);

    static O_SHAPE = new RotatingShape(`OO
                                        OO`);
}