import {rootReducer} from "modules/App/reducer";
import {ModalReducer} from "modules/Modal/reducer";
import {MODAL_MODULE, TModal} from "modules/Modal/types";

const selectModule = (state: ReturnType<typeof rootReducer>): ReturnType<typeof ModalReducer> => {
    return state[MODAL_MODULE];
}

const selectModalState = (state: ReturnType<typeof rootReducer>): TModal => {
    return selectModule(state).modal;
}

const selectIsActiveModal = (state: ReturnType<typeof rootReducer>, modalId: string): boolean => {
    return selectModalState(state)[modalId];
}

export {
    selectIsActiveModal,
}