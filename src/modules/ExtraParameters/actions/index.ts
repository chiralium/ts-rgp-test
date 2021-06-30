import {EXTRA_PARAMETERS_ACTION_TYPES, TEXSetAction} from "modules/ExtraParameters/types";
import {BASIC_PARAMETERS_ACTION_TYPES, TBPAction} from "modules/BasicParameters/types";
import {ThunkDispatch} from "redux-thunk";

const setLivingPowerAction = (livingPower: number): TEXSetAction => {
    return {
        type: EXTRA_PARAMETERS_ACTION_TYPES.EX_SET_LIVING_POWER,
        payload: livingPower,
    };
};

const setEvasionAction = (evasion: number): TEXSetAction => {
    return {
        type: EXTRA_PARAMETERS_ACTION_TYPES.EX_SET_EVASION,
        payload: evasion,
    };
};

const setEnergyActions = (energy: number): TEXSetAction => {
    return {
        type: EXTRA_PARAMETERS_ACTION_TYPES.EX_SET_ENERGY,
        payload: energy,
    };
};

const setIsLoadedAction = (isLoaded: boolean): TBPAction<boolean> => {
    return {
        type: EXTRA_PARAMETERS_ACTION_TYPES.EP_IS_LOADED,
        payload: isLoaded,
    }
}

const initEP = () => {
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
    setLivingPowerAction,
    setEnergyActions,
    setEvasionAction,
    setIsLoadedAction,
    initEP,
};
