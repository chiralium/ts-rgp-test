import React from 'react';
import block, {Block} from 'bem-cn';

import './style.scss';
import {useDispatch, useSelector} from "react-redux";
import {selectIsActiveModal} from "modules/Modal/selectors";
import {CombinedState} from "redux";
import {hideModalAction} from "modules/Modal/actions";
import {Modal} from "modules/Modal/containers/Modal";
import {Box} from "containers/Box";

const b: Block = block('load-modal');
export const MODAL_LOAD_GAME = 'MODAL_LOAD_GAME';

const LoadModal = (): JSX.Element => {
    const dispatch = useDispatch();

    const isActive = useSelector(state =>
        selectIsActiveModal(state as CombinedState<any>, MODAL_LOAD_GAME)
    );

    const hideModal = () => {
        dispatch(hideModalAction(MODAL_LOAD_GAME));
    };


    return (
        <>
            {isActive &&
                <Modal outsideClick={hideModal}>
                    <Box theme="red" name="Загрузить игру">
                        <div className={b()}>
                            <input type="file"
                                   accept=".json"
                                   className={b('file')}
                            />
                        </div>
                    </Box>
                </Modal>
            }
        </>
    );
};

export {LoadModal};
