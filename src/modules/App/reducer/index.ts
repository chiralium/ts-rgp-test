import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import {BASIC_PARAMETERS_MODULE} from "modules/BasicParameters/types";
import BPReducer from "modules/BasicParameters/reducer";

import {EXTRA_PARAMETERS_MODULE} from "modules/ExtraParameters/types";
import EXReducer from "modules/ExtraParameters/reducer";

import {MODAL_MODULE} from "modules/Modal/types";
import {ModalReducer} from "modules/Modal/reducer";

const rootReducer = combineReducers({
    [BASIC_PARAMETERS_MODULE]: BPReducer,
    [EXTRA_PARAMETERS_MODULE]: EXReducer,
    [MODAL_MODULE]: ModalReducer,
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
);

export {store, rootReducer};