import React from 'react';
import ReactDOM from 'react-dom';
import {App} from 'modules/App/components/App';
import {store} from "modules/App/reducer";
import {Provider} from "react-redux";

const init = (): void => {
    const root: HTMLElement | null = document.querySelector('#root');
    if (root) {
        ReactDOM.render(
            <Provider store={store}>
                <App/>
            </Provider>,
            root,
        );
    } else {
        console.log("no root element!");
    }
}

init();