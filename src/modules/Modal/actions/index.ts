import {MODAL_ACTIONS, TModalAction} from "modules/Modal/types";

const hideModalAction = (modalId: string): TModalAction => {
    return {
        payload: modalId,
        type: MODAL_ACTIONS.HIDE_MODAL,
    };
};

const showModalAction = (modalId: string): TModalAction => {
    return {
        payload: modalId,
        type: MODAL_ACTIONS.SHOW_MODAL,
    };
};

export {
    hideModalAction,
    showModalAction,
};
