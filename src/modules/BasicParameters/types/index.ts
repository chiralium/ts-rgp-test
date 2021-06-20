export const BASIC_PARAMETERS_TYPES = {
    BP_SET_NAME: 'BP_SET_NAME',
}

export const BASIC_PARAMETERS_MODULE = 'BASIC_PARAMETERS_MODULE';

type TBPSetNameAction = string;

export type TBPAction = {
    type: string,
    payload: TBPSetNameAction,
}

export type TBPState = {
    name: string,
}