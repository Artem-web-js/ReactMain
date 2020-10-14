import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, {addPost, stateType} from "./components/REDUX/state";

export let renderEntireTree = (props: stateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPostCallback={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

serviceWorker.unregister();



