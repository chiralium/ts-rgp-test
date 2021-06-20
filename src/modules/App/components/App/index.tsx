import React from "react";
import {Box} from 'containers/Box';
import {BasicParameters} from 'modules/BasicParameters/components/BasicParameters';

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
                <div className={b('title')}>
                    {`RPG - ${playerName}`}
                </div>
            </Box>
            <Box theme="red">
                <div className={b('layout')}>
                    <Box theme="green">
                        <BasicParameters/>
                    </Box>
                    <Box theme="green">
                        <div>Skills</div>
                    </Box>
                </div>
            </Box>
        </div>
    );
}

export {App};
