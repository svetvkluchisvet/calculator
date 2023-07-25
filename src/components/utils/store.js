import {createStore} from "redux";
import {reducer} from "./reducer.js";
import {composeWithDevTools} from 'redux-devtools-extension'


let store = createStore(reducer, composeWithDevTools())

export default store;