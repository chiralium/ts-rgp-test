import {Dispatch} from "redux";

export const BASIC_PARAMETERS_MODULE = 'BASIC_PARAMETERS_MODULE';

export const BASIC_PARAMETERS_ACTION_TYPES = {
    BP_SET_NAME: 'BP_SET_NAME',
    BP_SET_POWER: 'BP_SET_POWER',
    BP_SET_DEXTERITY: 'BP_SET_DEXTERITY',
    BP_SET_IQ: 'BP_SET_IQ',
    BP_SET_CHARISMA: 'BP_SET_CHARISMA',
    BP_SET_STATE: 'BP_SET_STATE',
    BP_IS_LOADED: 'BP_IS_LOADED',
}

export const BASIC_PARAMETERS_LIST = {
    POWER: 'power',
    IQ: 'iq',
    DEXTERITY: 'dexterity',
    CHARISMA: 'charisma',
}

export type TBPAction<K> = {
    type: string,
    payload: K,
}

export type TBPState = {
    name: string,
    power: number,
    charisma: number,
    dexterity: number,
    iq: number,
    isLoaded: boolean,
}