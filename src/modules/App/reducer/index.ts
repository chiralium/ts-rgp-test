import {combineReducers, createStore} from "redux";

import {BASIC_PARAMETERS_MODULE} from "modules/BasicParameters/types";
import BPReducer from "modules/BasicParameters/reducer";

const rootReducer = combineReducers({
    [BASIC_PARAMETERS_MODULE]: BPReducer,
});

const store = createStore(
    rootReducer,
);

export {store, rootReducer};