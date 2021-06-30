import React from "react";
import {Box} from 'containers/Box';
import {BasicParameters} from 'modules/BasicParameters/components/BasicParameters';
import {ExtraParameters} from 'modules/ExtraParameters/components/ExtraParameters';

import './style.scss';
import block, {Block} from "bem-cn";
import {useSelector} from "react-redux";
import {selectIsLoaded as selectIsLoadedBP, selectName} from "modules/BasicParameters/selectors";
import {selectIsLoaded as selectIsLoadedEP} from 'modules/ExtraParameters/selectors';
const b: Block = block('app');

const App = (): JSX.Element  => {
    const playerName = useSelector(selectName);
    const basicParametersIsLoaded = useSelector(selectIsLoadedBP);
    const extraParametersIsLoaded = useSelector(selectIsLoadedEP);

    return (
        <div className={b()}>
            <Box theme="blue" isLoading={!basicParametersIsLoaded}>
                <h1 className={b('title')}>
                    {`RPG - ${playerName}`}
                </h1>
            </Box>
            <Box theme="red">
                <div className={b('layout')}>
                    <Box theme="green"
                         name="Базовые параметры"
                         isLoading={!basicParametersIsLoaded}
                         stickyTrick
                    >
                        <BasicParameters/>
                    </Box>
                    <Box theme="green"
                         name="Дополнительные параметры"
                         isLoading={!extraParametersIsLoaded}>
                        <ExtraParameters/>
                    </Box>
                </div>
            </Box>
        </div>
    );
}

export {App};
