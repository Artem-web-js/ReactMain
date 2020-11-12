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

const App: React.FC<AppType> = (props) => {
    const store = props.store.getState();

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navigations/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={() => <DialogsContainer store={props.store}
                        // dialogsData={store.profilePage.dialogsData}
                        // messageData={store.messagesPage.messageData}
                        // newMessageBody={store.messagesPage.newMessageBody}
                        // dispatch={props.store.dispatch.bind(props.store)}
                    />}/>
                    <Route path={'/profile'} render={() => <Profile store={props.store}
                        // posts={store.profilePage.posts}
                        // newPostText={store.profilePage.newPostText}
                        // dispatch={props.store.dispatch.bind(props.store)}
                    />}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
