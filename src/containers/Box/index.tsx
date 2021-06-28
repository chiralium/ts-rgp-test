import React from 'react';

import './style.scss';
import block from 'bem-cn';
const b = block('box');


type TProps = {
    theme?: string,
    name?: string,
    children: JSX.Element | Array<JSX.Element>,
    stickyTrick?: boolean,
}

const Box = (props: TProps): JSX.Element => {
    const {children, theme, name, stickyTrick} = props;
    return (
        <div className={b({theme: theme})}>
            <h1 className={b('name')}>{name}</h1>
            { stickyTrick &&
                <div className={b('sticky-trick')}/>
            }
            {children}
        </div>
    )
}

export {Box};