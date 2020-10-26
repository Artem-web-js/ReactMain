import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigations from "./components/Navigation/Navigation";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import store, {StoreType} from "./components/REDUX/state";
import Profile from './components/Profile/Profile';

type AppType = {
    store: StoreType
}

function App(props: AppType) {

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navigations/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogsData={props.store._state.profilePage.dialogsData}
                                                                    messageData={props.store._state.messagesPage.messageData}/>}/>
                    <Route path={'/profile'} render={() => <Profile posts={props.store._state.profilePage.posts}
                                                                    newPostText={props.store._state.profilePage.newPostText}
                                                                    updateNewPostText={props.store.updateNewPostText}
                                                                    addPostCallback={store.addPost} />}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
