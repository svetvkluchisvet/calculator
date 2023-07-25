import {CLEAR, EQUAL, OPERATION} from "./types";

export const CALCULATOR_KEY = 'calculatorStore';

let initialState = {
    number: '',
    answer: '',
}

export const calculatorReducer = (state = initialState, action) => {
    let {type, payload} = action;

    switch (type) {

        case  EQUAL:
            try {
                return {
                    ...state,
                    ...payload,
                    answer: eval(state.number).toString(),
                }
            } catch (err) {
                return {
                    ...state,
                    answer: 'Error',
                }
            }

        case  OPERATION:
            return {
                ...state,
                ...payload,
                number: state.number.concat(action.payload)
            };

        case  CLEAR:
            return {
                ...state,
                ...payload,
                number: '',
                answer: ''
            };

        default:
            return state;
    }
};
