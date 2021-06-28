import React from 'react';

import {Box} from "containers/Box";
import {Skills} from "components/Skills";
import block from 'bem-cn';
import './style.scss'

const b = block('extra-parameters');

const ExtraParameters = (): JSX.Element => {
    return (
        <div className={b()}>
            <div className={b('items')}>
                <Box theme="blue" name="Жизненная сила">
                    <div className={b('indicator')}>
                        0
                    </div>
                </Box>
                <Box theme="blue" name="Уклонение">
                    <div className={b('indicator')}>
                        0
                    </div>
                </Box>
                <Box theme="blue" name="Энергичность">
                    <div className={b('indicator')}>
                        0
                    </div>
                </Box>
            </div>
            <Skills/>
        </div>
    )
}

export {ExtraParameters};