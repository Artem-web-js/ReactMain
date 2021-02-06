import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import React from "react";

let mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.profilePage.dialogsData,
        messageData: state.messagesPage.messageData,
        newMessageBody: state.messagesPage.newMessageBody,
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

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);