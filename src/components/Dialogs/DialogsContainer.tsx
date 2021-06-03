import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import React from "react";

let mapStateToProps = ({profilePage, messagesPage}: any) => {
    return {
        dialogsPage: profilePage.dialogsData,
        messageData: messagesPage.messageData,
        newMessageBody: messagesPage.newMessageBody,
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);