import React from 'react';

import {Box} from "containers/Box";
import {Skills} from "components/Skills";
import {livingPower, energy, evasion} from "components/ExtraParameters/helper";


import block from 'bem-cn';
import './style.scss'
import {useSelector} from "react-redux";
import {selectCharisma, selectDexterity, selectIQ, selectName, selectPower} from "modules/BasicParameters/selectors";

const b = block('extra-parameters');

const ExtraParameters = (): JSX.Element => {
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
            <div className={b('items')}>
                <Box theme="blue" name="Жизненная сила">
                    <div className={b('indicator')}>
                        {livingPower(playerPower)}
                    </div>
                </Box>
                <Box theme="blue" name="Уклонение">
                    <div className={b('indicator')}>
                        {evasion(playerDexterity)}
                    </div>
                </Box>
                <Box theme="blue" name="Энергичность">
                    <div className={b('indicator')}>
                        {energy(playerDexterity, playerIQ)}
                    </div>
                </Box>
            </div>
            <Skills/>
        </div>
    )
}

export {ExtraParameters};