import counterReducer from "../reducer/counter_reducer";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    counter:counterReducer,
});

export default allReducers;
