import {combineReducers, createStore} from "redux";

import {BASIC_PARAMETERS_MODULE} from "modules/BasicParameters/types";
import BPReducer from "modules/BasicParameters/reducer";

import {EXTRA_PARAMETERS_MODULE} from "modules/ExtraParameters/types";
import {EXReducer} from "modules/ExtraParameters/reducer";

const rootReducer = combineReducers({
    [BASIC_PARAMETERS_MODULE]: BPReducer,
    [EXTRA_PARAMETERS_MODULE]: EXReducer,
});

const store = createStore(
    rootReducer,
);

export {store, rootReducer};