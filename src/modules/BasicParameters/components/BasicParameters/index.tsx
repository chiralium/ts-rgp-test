import React from 'react';
import {Box} from 'containers/Box';
import {setNameAction} from "modules/BasicParameters/actions";

import './style.scss';
import block from 'bem-cn';
import {useDispatch, useSelector} from "react-redux";
import {selectName} from "modules/BasicParameters/selectors";
const b = block('basic-parameters');

const BasicParameters = () => {
    const dispatch = useDispatch();

    const handleOnChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value: string | null = e.target.value;
        dispatch(setNameAction(value));
    }

    const playerName = useSelector(selectName);

    return (
        <Box theme="green">
            <div className={b()}>
                <div className={b('fieldset')}>
                    <div className={b('label')}>Name: </div>
                    <input className={b('input')}
                           name="name"
                           onChange={handleOnChangeName}
                           value={playerName}
                           type="text"/>
                </div>
            </div>
        </Box>
    )
};

export {BasicParameters};
