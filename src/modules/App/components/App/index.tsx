import React from "react";
import {Box} from 'containers/Box';
import {BasicParameters} from 'modules/BasicParameters/components/BasicParameters';
import {ExtraParameters} from 'components/ExtraParameters';

import './style.scss';
import block from "bem-cn";
import {useSelector} from "react-redux";
import {selectName} from "modules/BasicParameters/selectors";
const b = block('app');

const App = (): JSX.Element  => {
    const playerName = useSelector(selectName);

    return (
        <div className={b()}>
            <Box theme="blue">
                <h1 className={b('title')}>
                    {`RPG - ${playerName}`}
                </h1>
            </Box>
            <Box theme="red">
                <div className={b('layout')}>
                    <Box theme="green" name="Базовые параметры">
                        <BasicParameters/>
                    </Box>
                    <Box theme="green" name="Дополнительные параметры">
                        <ExtraParameters/>
                    </Box>
                </div>
            </Box>
        </div>
    );
}

export {App};
