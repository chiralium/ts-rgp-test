import React from 'react';

import './style.scss';
import block, {Block} from 'bem-cn';
const b: Block = block('box');


type TProps = {
    theme?: string,
    name?: string,
    children: JSX.Element | Array<JSX.Element>,
    stickyTrick?: boolean,
    isLoading?: boolean,
}

const Box = (props: TProps): JSX.Element => {
    const {children, theme, name, stickyTrick, isLoading} = props;
    return (
        <div className={b({theme: theme}).is({loading: !!isLoading})}>
            <h1 className={b('name', {hidden: !!isLoading})}>{name}</h1>
            { stickyTrick &&
                <div className={b('sticky-trick')}/>
            }
            {children}
        </div>
    )
}

export {Box};