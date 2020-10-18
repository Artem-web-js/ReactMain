import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, {addPost, stateType, subscribe, updateNewPostText} from "./components/REDUX/state";

let rerenderEntireTree = (props: stateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPostCallback={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

serviceWorker.unregister();



