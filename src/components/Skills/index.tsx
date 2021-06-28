import React from 'react';
import block from 'bem-cn';
import {SKILLS_LIST_MOCK, SKILLS_MAP} from "components/Skills/types";
import {Box} from "containers/Box";
import './style.scss';
import {Levels} from "containers/Levels";

const b = block('skills');

const Skills = (): JSX.Element => {
    return (
        <Box theme="blue" name="Скиллы">
            <div className={b()}>
                {
                    SKILLS_LIST_MOCK.map(skill => {
                        return (
                            <Box theme="blue" name={skill.name}>
                                <Levels mapLevel={SKILLS_MAP} maxLevel={skill.level} />
                            </Box>
                        );
                    })
                }
            </div>
        </Box>
    )
}

export {Skills};
