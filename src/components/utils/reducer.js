import {CALCULATOR_KEY, calculatorReducer} from './calculator.reducer'
import {combineReducers} from 'redux';

let reducer = combineReducers({
    [CALCULATOR_KEY]: calculatorReducer
});

export {reducer};
