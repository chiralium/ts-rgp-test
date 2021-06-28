import {EXTRA_PARAMETERS_ACTION_TYPES, TEXSetAction} from "modules/ExtraParameters/types";

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

export {
    setLivingPowerAction,
    setEnergyActions,
    setEvasionAction,
};
