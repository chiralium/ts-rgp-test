export const MODAL_MODULE = 'MODAL_MODULE';
export const MODAL_ACTIONS = {
    HIDE_MODAL: 'HIDE_MODAL',
    SHOW_MODAL: 'SHOW_MODAL',
}

export type TModalAction = {
    payload: string,
    type: string,
}

export type TModal = {
    [modalId: string]: boolean,
}
export type TModalState = {
    modal: TModal,
}