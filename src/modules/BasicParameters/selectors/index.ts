import {BASIC_PARAMETERS_MODULE} from "modules/BasicParameters/types";
import {rootReducer} from "modules/App/reducer";
import BPReducer from 'modules/BasicParameters/reducer';

const selectModule = (state: ReturnType<typeof rootReducer>): ReturnType<typeof BPReducer> => {
    return state[BASIC_PARAMETERS_MODULE];
}

const selectName = (state: ReturnType<typeof rootReducer>): string => {
    return selectModule(state).name;
}

const selectPower = (state: ReturnType<typeof rootReducer>): number => {
    return selectModule(state).power;
}

const selectCharisma = (state: ReturnType<typeof rootReducer>): number => {
    return selectModule(state).charisma;
}

const selectIQ = (state: ReturnType<typeof rootReducer>): number => {
    return selectModule(state).iq;
}

const selectDexterity = (state: ReturnType<typeof rootReducer>): number => {
    return selectModule(state).dexterity;
}

export {
    selectName,
    selectPower,
    selectCharisma,
    selectIQ,
    selectDexterity,
}