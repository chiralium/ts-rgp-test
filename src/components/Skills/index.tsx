import React from 'react';
import block, {Block} from 'bem-cn';
import {Skills, SKILLS_MAP} from "components/Skills/types";
import {Box} from "containers/Box";
import './style.scss';
import {Levels} from "containers/Levels";
import {useSelector} from "react-redux";
import {selectCharisma, selectDexterity, selectIQ, selectPower} from "modules/BasicParameters/selectors";

const b: Block = block('skills');

const SkillsTable = (): JSX.Element => {
    const [
        playerPower,
        playerIQ,
        playerDexterity,
        playerCharisma,
    ] = [
        useSelector(selectPower),
        useSelector(selectIQ),
        useSelector(selectDexterity),
        useSelector(selectCharisma),
    ];

    const player = new Skills({
        power: playerPower,
        iq: playerIQ,
        dexterity: playerDexterity,
        charisma: playerCharisma,
    });

    return (
        <Box theme="blue" name="Скиллы">
            <div className={b()}>
                {
                    player.skills.map(skill => {
                        return (
                            <Box theme="blue" name={skill.name}>
                                <Levels
                                    mapLevel={SKILLS_MAP}
                                    maxLevel={skill.level}
                                />
                            </Box>
                        );
                    })
                }
            </div>
        </Box>
    )
}

export {SkillsTable};
