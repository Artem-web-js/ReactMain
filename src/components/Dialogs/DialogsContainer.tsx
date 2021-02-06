import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

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

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default DialogsContainer;