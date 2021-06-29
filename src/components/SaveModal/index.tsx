import React from "react";
import block, {Block} from 'bem-cn';
import {Modal} from "modules/Modal/containers/Modal";
import {Box} from "containers/Box";
import {useDispatch, useSelector} from "react-redux";
import {selectIsActiveModal} from "modules/Modal/selectors";
import {CombinedState} from "redux";
import {hideModalAction} from "modules/Modal/actions";
import './style.scss';

const b: Block = block('save-modal');
export const MODAL_SAVE_GAME = 'MODAL_SAVE_GAME';

const SaveModal = (): JSX.Element => {
    const dispatch = useDispatch();

    const isActive = useSelector(state =>
        selectIsActiveModal(state as CombinedState<any>, MODAL_SAVE_GAME)
    );

    const hideModal = () => {
        dispatch(hideModalAction(MODAL_SAVE_GAME));
    }

    return (
        <>
            {isActive &&
                <Modal outsideClick={hideModal}>
                    <Box theme="red" name="Сохранить игру">
                        <div className={b()}>
                            <button className={b('button', {yes: true})}>
                                да
                            </button>
                            <button className={b('button', {no: true})} onClick={hideModal}>
                                нет
                            </button>
                        </div>
                    </Box>
                </Modal>
            }
        </>
    );
};

export {SaveModal}