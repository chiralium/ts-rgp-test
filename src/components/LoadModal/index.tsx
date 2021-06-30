import React, {useState} from 'react';
import block, {Block} from 'bem-cn';

import './style.scss';
import {useDispatch, useSelector} from "react-redux";
import {selectIsActiveModal} from "modules/Modal/selectors";
import {CombinedState} from "redux";
import {hideModalAction} from "modules/Modal/actions";
import {Modal} from "modules/Modal/containers/Modal";
import {Box} from "containers/Box";
import {TBPState} from "modules/BasicParameters/types";
import {setStateAction} from "modules/BasicParameters/actions";

const b: Block = block('load-modal');
export const MODAL_LOAD_GAME = 'MODAL_LOAD_GAME';

const LoadModal = (): JSX.Element => {
    const [error, setError] = useState<string>('');
    const [isLoaded, setIsLoaded] = useState<boolean>(true);

    const dispatch = useDispatch();

    const isActive = useSelector(state =>
        selectIsActiveModal(state as CombinedState<any>, MODAL_LOAD_GAME)
    );

    const hideModal = () => {
        dispatch(hideModalAction(MODAL_LOAD_GAME));
    };

    const handleFileButton = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file: File = e.target.files[0];
            const fileReader = new FileReader();
            setIsLoaded(false);
            fileReader.onload = (onloadEvent: ProgressEvent<FileReader>): void => {
                if (onloadEvent && onloadEvent.target) {
                    try {
                        const data: TBPState = JSON.parse(onloadEvent.target.result as string);
                        dispatch(setStateAction(data));
                        hideModal();
                    } catch (e) {
                        setError('Parsing error!');
                    } finally {
                        setIsLoaded(true);
                    }
                }
            }
            fileReader.readAsText(file);
        }
    }

    return (
        <>
            {isActive &&
                <Modal outsideClick={hideModal}>
                    <Box theme="red" name="Загрузить игру">
                        <div className={b.is({loading: !isLoaded})}>
                            <input type="file"
                                   accept=".json"
                                   onChange={handleFileButton}
                                   className={b('file')}
                            />
                            {error &&
                                <div className={b('error')}>
                                    {error}
                                </div>
                            }
                        </div>
                    </Box>
                </Modal>
            }
        </>
    );
};

export {LoadModal};
