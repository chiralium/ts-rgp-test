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
        <div className={b()}>
            <Box theme="blue" name="Имя">
                <input className={b('input')}
                       name="name"
                       onChange={handleOnChangeName}
                       value={playerName}
                       type="text"/>
            </Box>
            <div className={b('numeric')}>
                <Box theme="blue" name="Сила">
                    <input className={b('input')} type="number" min="0" value="0" />
                </Box>
                <Box theme="blue" name="Ловкость">
                    <input className={b('input')} type="number" min="0" value="0" />
                </Box>
                <Box theme="blue" name="Интеллект">
                    <input className={b('input')} type="number" min="0" value="0" />
                </Box>
                <Box theme="blue" name="Харизма">
                    <input className={b('input')} type="number" min="0" value="0" />
                </Box>
            </div>
        </div>
    )
};

export {BasicParameters};
