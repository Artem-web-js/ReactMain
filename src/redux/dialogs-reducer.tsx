import {MessageProps} from "../components/Dialogs/Message/Message";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

export type ChangeNewBodyActionType = {
    type: typeof UPDATE_NEW_MESSAGE_BODY
    body: string
}
export type SendMessageActionType = {
    type: typeof SEND_MESSAGE
}

type ActionTypes = ChangeNewBodyActionType | SendMessageActionType

type MessagePageType = {
    messageData: Array<MessageProps>
    newMessageBody: string
}

let initialState = {
    messageData: [
        {id: 1, message: "Hi! How are you?"},
        {id: 2, message: "I'm fine! How about you?"},
        {id: 3, message: "I'm okay. What are you doing this night?"},
        {id: 4, message: "I going to do home tasks."},
        {id: 5, message: "How about to go to the cinema?"}
    ],
    newMessageBody: ""
};

const dialogsReducer = (state: MessagePageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            }
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                messageData: [...state.messageData, {id: 6, message: body}]
            }
        }
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