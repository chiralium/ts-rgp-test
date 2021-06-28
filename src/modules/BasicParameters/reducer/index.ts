import {BASIC_PARAMETERS_ACTION_TYPES} from "modules/BasicParameters/types";
import type {TBPAction, TBPState} from "modules/BasicParameters/types";

const initialState: TBPState = {
    name: "Player",
    power: 0,
    charisma: 0,
    dexterity: 0,
    iq: 0,
}

const BPReducer = (state: TBPState = initialState, action: TBPAction<string | number>): TBPState => {
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

        default:
            return state;
    }
}

export default BPReducer;