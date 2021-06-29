import React from 'react';
import ReactDOM from "react-dom";

import './style.scss';
let mountedPoint: Element | null = document.querySelector('body');

type TProps = {
    children: JSX.Element | Array<JSX.Element>,
    outsideClick: (e: React.MouseEvent) => void,
}

const Modal = (props: TProps): JSX.Element => {
    const { children, outsideClick } = props;

    if (!mountedPoint) {
        console.error('No <body> DOM');
    }

    return ReactDOM.createPortal(
        <>
            <div className="modal" onClick={outsideClick}/>
            <div className="modal-content">
                {children}
            </div>
        </>,
        mountedPoint as HTMLElement,
    );
}

export {Modal};