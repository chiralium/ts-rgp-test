import React from 'react';

import './style.scss';
import block from 'bem-cn';
const b = block('box');


type TProps = {
    theme?: string,
    children: JSX.Element | Array<JSX.Element>,
}

const Box = (props: TProps): JSX.Element => {
    const {children, theme} = props;
    return (
        <div className={b({theme: theme})}>
            {children}
        </div>
    )
}

export {Box};