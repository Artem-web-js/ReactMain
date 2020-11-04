import {ActionTypes, messagePageType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

export type ChangeNewBodyActionType = {
    type: typeof UPDATE_NEW_MESSAGE_BODY
    body: string
}
export type SendMessageActionType = {
    type: typeof SEND_MESSAGE
}

const dialogsReducer = (state: messagePageType, action: ActionTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messageData.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = (): SendMessageActionType => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body: string): ChangeNewBodyActionType => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
};

export default dialogsReducer;