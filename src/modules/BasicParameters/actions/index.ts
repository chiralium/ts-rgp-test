import {BASIC_PARAMETERS_ACTION_TYPES, TBPAction} from 'modules/BasicParameters/types';

const setNameAction = (name: string): TBPAction<string> => {
    return {
        type: BASIC_PARAMETERS_ACTION_TYPES.BP_SET_NAME,
        payload: name,
    };
};

const setPowerAction = (power: number): TBPAction<number> => {
    return {
        type: BASIC_PARAMETERS_ACTION_TYPES.BP_SET_POWER,
        payload: power,
    };
};

const setDexterityAction = (dexterity: number): TBPAction<number> => {
    return {
        type: BASIC_PARAMETERS_ACTION_TYPES.BP_SET_DEXTERITY,
        payload: dexterity,
    };
};

const setCharismaAction = (charisma: number): TBPAction<number> => {
    return {
        type: BASIC_PARAMETERS_ACTION_TYPES.BP_SET_CHARISMA,
        payload: charisma,
    };
};

const setIQAction = (iq: number): TBPAction<number> => {
    return {
        type: BASIC_PARAMETERS_ACTION_TYPES.BP_SET_IQ,
        payload: iq,
    };
};


export {
    setNameAction,
    setPowerAction,
    setCharismaAction,
    setDexterityAction,
    setIQAction,
};