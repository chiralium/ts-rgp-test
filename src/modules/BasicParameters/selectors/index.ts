import {BASIC_PARAMETERS_MODULE} from "modules/BasicParameters/types";
import {rootReducer} from "modules/App/reducer";

const selectModule = (state: ReturnType<typeof rootReducer>) => {
    return state[BASIC_PARAMETERS_MODULE];
}

export const selectName = (state: ReturnType<typeof rootReducer>) => {
    return selectModule(state).name;
}

