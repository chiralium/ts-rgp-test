import {BASIC_PARAMETERS_ACTION_TYPES, TBPAction, TBPState} from 'modules/BasicParameters/types';
import {ThunkDispatch} from "redux-thunk";

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

const setStateAction = (state: TBPState): TBPAction<TBPState> => {
    return {
        type: BASIC_PARAMETERS_ACTION_TYPES.BP_SET_STATE,
        payload: state,
    }
}

const setIsLoadedAction = (isLoaded: boolean): TBPAction<boolean> => {
    return {
        type: BASIC_PARAMETERS_ACTION_TYPES.BP_IS_LOADED,
        payload: isLoaded,
    }
}

const initBP = () => {
    return async (dispatch: ThunkDispatch<any, any, any>) => {
        dispatch(setIsLoadedAction(false));

        setTimeout(
            () => {
                dispatch(setIsLoadedAction(true))
            },
            2000 - Math.random() * (1 - 4) + 1,
        );
    }
}

export {
    setNameAction,
    setPowerAction,
    setCharismaAction,
    setDexterityAction,
    setIQAction,
    setStateAction,
    setIsLoadedAction,
    initBP,
};