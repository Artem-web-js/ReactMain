import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store , {stateType} from "./components/REDUX/state";

let rerenderEntireTree = (props: stateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store._state);

store.subscribe(rerenderEntireTree);

serviceWorker.unregister();



