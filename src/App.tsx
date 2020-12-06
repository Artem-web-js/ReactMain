import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigations from "./components/Navigation/Navigation";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Profile from './components/Profile/Profile';
import {StoreType} from './components/REDUX/store';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type AppType = {
    store: StoreType
}

const App = () => {
    //const store = props.store.getState();

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navigations/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/profile'} render={() => <Profile/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;