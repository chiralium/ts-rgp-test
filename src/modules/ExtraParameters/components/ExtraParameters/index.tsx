import React, {useEffect} from 'react';

import {Box} from "containers/Box";
import {SkillsTable} from "components/Skills";
import {livingPower, energy, evasion} from "modules/ExtraParameters/helpers";
import block, {Block} from 'bem-cn';
import './style.scss'
import {useDispatch, useSelector} from "react-redux";
import {selectDexterity, selectIQ, selectPower} from "modules/BasicParameters/selectors";
import {initEP, setEnergyActions, setEvasionAction, setLivingPowerAction} from "modules/ExtraParameters/actions";
import {selectEnergy, selectEvasion, selectLivingPower} from "modules/ExtraParameters/selectors";

const b: Block = block('extra-parameters');

const ExtraParameters = (): JSX.Element => {
    const dispatch = useDispatch();

    const [
        playerPower,
        playerIQ,
        playerDexterity,
    ] = [
        useSelector(selectPower),
        useSelector(selectIQ),
        useSelector(selectDexterity),
    ];

    const [
        playerLivingPower,
        playerEvasion,
        playerEnergy,
    ] = [
        useSelector(selectLivingPower),
        useSelector(selectEvasion),
        useSelector(selectEnergy),
    ];

    useEffect(() => {
        dispatch(setLivingPowerAction(livingPower(playerPower)));
    }, [playerPower]);

    useEffect(() => {
        dispatch(setEvasionAction(evasion(playerDexterity)));
        dispatch(setEnergyActions(energy(playerDexterity, playerIQ)));
    }, [playerIQ, playerDexterity]);

    useEffect(() => {
        dispatch(initEP());
    }, []);

    return (
        <div className={b()}>
            <div className={b('items')}>
                <Box theme="blue" name="Жизненная сила">
                    <div className={b('indicator')}>
                        {playerLivingPower}
                    </div>
                </Box>
                <Box theme="blue" name="Уклонение">
                    <div className={b('indicator')}>
                        {playerEvasion}
                    </div>
                </Box>
                <Box theme="blue" name="Энергичность">
                    <div className={b('indicator')}>
                        {playerEnergy}
                    </div>
                </Box>
            </div>
            <SkillsTable/>
        </div>
    )
}

export {ExtraParameters};