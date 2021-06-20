import {BASIC_PARAMETERS_TYPES} from "modules/BasicParameters/types";
import type {TBPAction, TBPState} from "modules/BasicParameters/types";

const initialState: TBPState = {
    name: "Player",
}

const BPReducer = (state: TBPState = initialState, action: TBPAction): TBPState => {
    console.log(action);
    switch (action.type) {
        case BASIC_PARAMETERS_TYPES.BP_SET_NAME: {
            return {
                ...state,
                name: action.payload,
            }
        }
        default:
            return state;
    }
}

export default BPReducer;