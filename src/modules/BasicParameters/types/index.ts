export const BASIC_PARAMETERS_ACTION_TYPES = {
    BP_SET_NAME: 'BP_SET_NAME',
    BP_SET_POWER: 'BP_SET_POWER',
    BP_SET_DEXTERITY: 'BP_SET_DEXTERITY',
    BP_SET_IQ: 'BP_SET_IQ',
    BP_SET_CHARISMA: 'BP_SET_CHARISMA',
}

export const BASIC_PARAMETERS_LIST = {
    POWER: 'power',
    IQ: 'iq',
    DEXTERITY: 'dexterity',
    CHARISMA: 'charisma',
}

export const BASIC_PARAMETERS_MODULE = 'BASIC_PARAMETERS_MODULE';

type TBPSetNameAction<K> = K;

export type TBPAction<K> = {
    type: string,
    payload: TBPSetNameAction<K>,
}

export type TBPState = {
    name: string,
    power: number,
    charisma: number,
    dexterity: number,
    iq: number,
}