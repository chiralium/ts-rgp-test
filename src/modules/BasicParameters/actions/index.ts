import {BASIC_PARAMETERS_TYPES, TBPAction} from 'modules/BasicParameters/types';

export const setNameAction = (name: string): TBPAction => {
    return {
        type: BASIC_PARAMETERS_TYPES.BP_SET_NAME,
        payload: name,
    }
}