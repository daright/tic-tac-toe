import { CIRCLE, CROSS, NOT_FILLED } from './store/constants';

export const flipSymbol = symbol => (symbol === CIRCLE ? CROSS : CIRCLE);

export const findWinner = fields => {
    //rows
    for (let index = 0; index < 7; index += 3) {
        if (fields[index] !== NOT_FILLED && fields[index] === fields[index + 1] && fields[index] === fields[index + 2]) {
            return fields[index];
        }
    }
    //cols
    for (let index = 0; index < 3; index++) {
        if (fields[index] !== NOT_FILLED && fields[index] === fields[index + 3] && fields[index] === fields[index + 6]) {
            return fields[index];
        }
    }
    //diag
    if (fields[0] !== NOT_FILLED && fields[0] === fields[4] && fields[0] === fields[8]) {
        return fields[0];
    }
    if (fields[2] !== NOT_FILLED && fields[2] === fields[4] && fields[2] === fields[6]) {
        return fields[2];
    }
};
