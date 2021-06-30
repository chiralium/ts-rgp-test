export const EXTRA_PARAMETERS_MODULE = 'EXTRA_PARAMETERS_MODULE';

export const EXTRA_PARAMETERS_ACTION_TYPES = {
    EX_SET_LIVING_POWER: 'EX_SET_LIVING_POWER',
    EX_SET_EVASION: 'EX_SET_EVASION',
    EX_SET_ENERGY: 'EX_SET_ENERGY',
    EX_SET_DAMAGE: 'EX_SET_DAMAGE',
    EP_IS_LOADED: 'EP_IS_LOADED',
}

export type TEXSetAction = {
    type: string,
    payload: number | boolean,
}

export type TEXState = {
    livingPower: number,
    evasion: number,
    energy: number,
    isLoaded: boolean,
}
