import {EXTRA_PARAMETERS_ACTION_TYPES, TEXSetAction, TEXState} from "modules/ExtraParameters/types";

const initialState: TEXState = {
    livingPower: 0,
    evasion: 0,
    energy: 0,
    isLoaded: true,
}

const EXReducer = (state: TEXState = initialState, action: TEXSetAction) => {
    switch (action.type) {
        case EXTRA_PARAMETERS_ACTION_TYPES.EX_SET_ENERGY: {
            return {
                ...state,
                energy: action.payload,
            }
        }

        case EXTRA_PARAMETERS_ACTION_TYPES.EX_SET_EVASION: {
            return {
                ...state,
                evasion: action.payload,
            };
        }

        case EXTRA_PARAMETERS_ACTION_TYPES.EX_SET_LIVING_POWER: {
            return {
                ...state,
                livingPower: action.payload,
            }
        }

        case EXTRA_PARAMETERS_ACTION_TYPES.EP_IS_LOADED: {
            return {
                ...state,
                isLoaded: action.payload,
            }
        }

        default:
            return state;
    }
}

export default EXReducer;