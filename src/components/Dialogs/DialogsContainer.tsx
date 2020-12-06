import React from "react";
import {StoreType} from "../REDUX/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../REDUX/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

type DialogsContainerType = {
    store: StoreType
}

let mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.profilePage.dialogsData,
        messageData: state.messagesPage.messageData,
        newMessageBody: state.messagesPage.newMessageBody
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;