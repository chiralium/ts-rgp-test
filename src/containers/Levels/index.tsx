import React from 'react';
import block, {Block} from "bem-cn";
import './style.scss';

const b: Block = block('levels');

type TMap = {
    color: string,
    name: string,
    level: number,
};

type TProps = {
    mapLevel: Array<TMap>,
    maxLevel: number,
}

const Levels = (props: TProps): JSX.Element => {
    const {maxLevel, mapLevel} = props;

    const renderLevelBlocks = ({maxLevel, mapLevel}: TProps): Array<JSX.Element> => {
        const levelList = [];

        if (maxLevel < 0) {
            maxLevel = 0;
        }

        for (let i: number = 0; i < mapLevel.length; i++) {
            levelList.push(
                <li className={b('item', {theme: mapLevel[i].color, success: i <= maxLevel})}>
                    <div className={b('wrapper')}>
                        <div className={b('number')}>
                            {mapLevel[i].level}
                        </div>
                        <div className={b('name')}>
                            {mapLevel[i].name}
                        </div>
                    </div>
                </li>
            )
        }

        return levelList;
    }

    return (
        <ul className={b()}>
            {renderLevelBlocks({maxLevel, mapLevel})}
        </ul>
    )
}

export {Levels};