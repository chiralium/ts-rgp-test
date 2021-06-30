import React from "react";
import block, {Block} from 'bem-cn';
import {Modal} from "modules/Modal/containers/Modal";
import {Box} from "containers/Box";
import {useDispatch, useSelector, useStore} from "react-redux";
import {selectIsActiveModal} from "modules/Modal/selectors";
import {CombinedState} from "redux";
import {hideModalAction} from "modules/Modal/actions";
import './style.scss';
import {generateSavingFile} from "components/SaveModal/helpers";
import {BASIC_PARAMETERS_MODULE, TBPState} from "modules/BasicParameters/types";

const b: Block = block('save-modal');
export const MODAL_SAVE_GAME = 'MODAL_SAVE_GAME';

const SaveModal = (): JSX.Element => {
    const dispatch = useDispatch();
    const {getState} = useStore();

    const isActive = useSelector(state =>
        selectIsActiveModal(state as CombinedState<any>, MODAL_SAVE_GAME)
    );

    const hideModal = (): void => {
        dispatch(hideModalAction(MODAL_SAVE_GAME));
    }

    const handleSaveButton = (): void => {
        const filename = new Date().toLocaleDateString().replace('/', '-') + '.json';
        const gamingData: TBPState  = getState()[BASIC_PARAMETERS_MODULE];

        if (gamingData) {
            generateSavingFile(filename, JSON.stringify(gamingData));
        }
        hideModal();
    }

    return (
        <>
            {isActive &&
                <Modal outsideClick={hideModal}>
                    <Box theme="red" name="Сохранить игру">
                        <div className={b()}>
                            <button className={b('button', {yes: true})} onClick={handleSaveButton}>
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