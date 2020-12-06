import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./components/REDUX/redux-store";
import {Provider} from "react-redux";
import {Store} from "redux";

let rerenderEntireTree = (store: Store) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store);

store.subscribe(() => {
    rerenderEntireTree(store)
});

serviceWorker.unregister();



