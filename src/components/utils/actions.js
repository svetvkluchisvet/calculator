import {CLEAR, EQUAL, OPERATION} from "./types";

export const setEqual = (number) => {
    return {
        type: EQUAL,
        payload: number
    };
};
export const setOperation = (number) => {
    return {
        type: OPERATION,
        payload: number
    };
};

export const setClear = (number) => ({
    type: CLEAR,
    payload: number
});
