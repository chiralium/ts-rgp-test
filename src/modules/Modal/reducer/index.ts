import {MODAL_ACTIONS, TModalAction, TModalState} from "modules/Modal/types";

const initialState = {
    modal: {},
};

const ModalReducer = (state: TModalState = initialState, action: TModalAction): TModalState => {
    switch (action.type) {
        case MODAL_ACTIONS.SHOW_MODAL:
            return {
                ...state,
                modal: {
                    ...state.modal,
                    [action.payload]: true,
                },
            };

        case MODAL_ACTIONS.HIDE_MODAL:
            return {
                ...state,
                modal: {
                    ...state.modal,
                    [action.payload]: false,
                }
            };

        default:
            return state;
    }
}

export {ModalReducer};
