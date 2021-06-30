import React, {useEffect} from 'react';
import ReactDOM from "react-dom";

import './style.scss';
let mountedPoint: HTMLBodyElement | null = document.querySelector('body');

type TProps = {
    children: JSX.Element | Array<JSX.Element>,
    outsideClick: (e: React.MouseEvent) => void,
}

const Modal = (props: TProps): JSX.Element => {
    const { children, outsideClick } = props;

    if (!mountedPoint) {
        console.error('No <body> DOM');
    }

    const disableScroll = (mountedPoint: HTMLBodyElement | null) => {
        if (mountedPoint) {
            mountedPoint.classList.add('modal-overlay');
        }
    }

    const enableScroll = (mountedPoint: HTMLBodyElement | null) => {
        if (mountedPoint) {
            mountedPoint.classList.remove('modal-overlay');
        }
    }

    useEffect(() => {
        disableScroll(mountedPoint);
        return () => enableScroll(mountedPoint);
    }, []);

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