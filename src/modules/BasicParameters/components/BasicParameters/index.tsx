import React from 'react';
import {Box} from 'containers/Box';
import {
    setCharismaAction,
    setDexterityAction,
    setIQAction,
    setNameAction,
    setPowerAction
} from "modules/BasicParameters/actions";
import {BASIC_PARAMETERS_LIST} from "modules/BasicParameters/types";

import './style.scss';
import block from 'bem-cn';
import {useDispatch, useSelector} from "react-redux";
import {selectCharisma, selectDexterity, selectIQ, selectName, selectPower} from "modules/BasicParameters/selectors";
const b = block('basic-parameters');

const BasicParameters = () => {
    const dispatch = useDispatch();

    const handleOnChangeName = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value: string | null = e.target.value;
        if (value) {
            dispatch(setNameAction(value));
        }
    }

    const handleOnChangeParameter = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value: string | null = e.target.value;
        const name: string | null = e.target.getAttribute('name');

        if (name && value) {
            switch (name) {
                case BASIC_PARAMETERS_LIST.POWER: {
                    dispatch(setPowerAction(Number(value)));
                    break;
                }

                case BASIC_PARAMETERS_LIST.CHARISMA: {
                    dispatch(setCharismaAction(Number(value)));
                    break;
                }

                case BASIC_PARAMETERS_LIST.IQ: {
                    dispatch(setIQAction(Number(value)));
                    break;
                }

                case BASIC_PARAMETERS_LIST.DEXTERITY: {
                    dispatch(setDexterityAction(Number(value)));
                    break;
                }

                default: null;
            }
        }
    }

    const [
        playerName,
        playerPower,
        playerIQ,
        playerDexterity,
        playerCharisma,
    ] = [
        useSelector(selectName),
        useSelector(selectPower),
        useSelector(selectIQ),
        useSelector(selectDexterity),
        useSelector(selectCharisma),
    ];

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
                    <input
                        className={b('input')}
                        type="number"
                        min="0"
                        name={BASIC_PARAMETERS_LIST.POWER}
                        onChange={handleOnChangeParameter}
                        value={playerPower} />
                </Box>
                <Box theme="blue" name="Ловкость">
                    <input
                        className={b('input')}
                        type="number"
                        min="0"
                        name={BASIC_PARAMETERS_LIST.DEXTERITY}
                        onChange={handleOnChangeParameter}
                        value={playerDexterity} />
                </Box>
                <Box theme="blue" name="Интеллект">
                    <input
                        className={b('input')}
                        type="number"
                        min="0"
                        name={BASIC_PARAMETERS_LIST.IQ}
                        onChange={handleOnChangeParameter}
                        value={playerIQ} />
                </Box>
                <Box theme="blue" name="Харизма">
                    <input
                        className={b('input')}
                        type="number"
                        min="0"
                        name={BASIC_PARAMETERS_LIST.CHARISMA}
                        onChange={handleOnChangeParameter}
                        value={playerCharisma} />
                </Box>
            </div>

            <Box theme="red" name="Получить урон!">
                <div className={b('get-damage')}>
                    <button type="button" className={b('get-damage-btn')}>
                        Получить урон
                    </button>
                </div>
            </Box>
        </div>
    )
};

export {BasicParameters};
