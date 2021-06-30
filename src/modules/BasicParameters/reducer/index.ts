import {BASIC_PARAMETERS_ACTION_TYPES} from "modules/BasicParameters/types";
import type {TBPAction, TBPState} from "modules/BasicParameters/types";

export const initialState: TBPState = {
    name: "Player",
    power: 0,
    charisma: 0,
    dexterity: 0,
    iq: 0,
    isLoaded: true,
}

const BPReducer = (state: TBPState = initialState, action: TBPAction<boolean | string | number | TBPState>): TBPState => {
    console.log(action);
    switch (action.type) {
        case BASIC_PARAMETERS_ACTION_TYPES.BP_SET_NAME: {
            return {
                ...state,
                name: action.payload as string,
            }
        }

        case BASIC_PARAMETERS_ACTION_TYPES.BP_SET_POWER: {
            return {
                ...state,
                power: action.payload as number,
            }
        }

        case BASIC_PARAMETERS_ACTION_TYPES.BP_SET_CHARISMA: {
            return {
                ...state,
                charisma: action.payload as number,
            }
        }

        case BASIC_PARAMETERS_ACTION_TYPES.BP_SET_IQ: {
            return {
                ...state,
                iq: action.payload as number,
            }
        }

        case BASIC_PARAMETERS_ACTION_TYPES.BP_SET_DEXTERITY: {
            return {
                ...state,
                dexterity: action.payload as number,
            }
        }

        case BASIC_PARAMETERS_ACTION_TYPES.BP_SET_STATE: {
            return {
                ...action.payload as TBPState,
                isLoaded: true,
            }
        }

        case BASIC_PARAMETERS_ACTION_TYPES.BP_IS_LOADED: {
            return {
                ...state,
                isLoaded: action.payload as boolean,
            }
        }

        default:
            return state;
    }
}

export default BPReducer;