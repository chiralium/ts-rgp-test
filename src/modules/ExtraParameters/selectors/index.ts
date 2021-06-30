import {rootReducer} from "modules/App/reducer";
import {EXTRA_PARAMETERS_MODULE} from "modules/ExtraParameters/types";
import EXReducer from "modules/ExtraParameters/reducer";

const selectModule = (state: ReturnType<typeof rootReducer>): ReturnType<typeof EXReducer> => {
    return state[EXTRA_PARAMETERS_MODULE];
}

const selectLivingPower = (state: ReturnType<typeof rootReducer>): number => {
    return selectModule(state).livingPower as number;
}

const selectEnergy = (state: ReturnType<typeof rootReducer>): number => {
    return selectModule(state).energy as number;
}

const selectEvasion = (state: ReturnType<typeof rootReducer>): number => {
    return selectModule(state).evasion as number;
}

const selectIsLoaded = (state: ReturnType<typeof rootReducer>): boolean => {
    return selectModule(state).isLoaded as boolean;
}

export {
    selectLivingPower,
    selectEnergy,
    selectEvasion,
    selectIsLoaded,
};