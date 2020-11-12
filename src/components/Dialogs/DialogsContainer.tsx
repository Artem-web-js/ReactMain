import React from "react";
import {StoreType} from "../REDUX/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../REDUX/dialogs-reducer";
import Dialogs from "./Dialogs";

type DialogsContainerType = {
    store: StoreType
}

const DialogsContainer = (props: DialogsContainerType) => {
    let state = props.store.getState().profilePage.dialogsData
    let messageData = props.store.getState().messagesPage

    let onSentMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSentMessageClick} dialogsPage={state} messageData={messageData.messageData} newMessageBody={messageData.newMessageBody}/>
}

export default DialogsContainer;