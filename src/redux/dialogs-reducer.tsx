import {MessageProps} from "../components/Dialogs/Message/Message";

const SEND_MESSAGE = "SEND-MESSAGE";

export type SendMessageActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

type ActionTypes = SendMessageActionType

type MessagePageType = {
    messageData: Array<MessageProps>
}

let initialState = {
    messageData: [
        {id: 1, message: "Hi! How are you?"},
        {id: 2, message: "I'm fine! How about you?"},
        {id: 3, message: "I'm okay. What are you doing this night?"},
        {id: 4, message: "I going to do home tasks."},
        {id: 5, message: "How about to go to the cinema?"}
    ]
};

const dialogsReducer = (state: MessagePageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messageData: [...state.messageData, {id: 6, message: body}]
            }
        }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody: string): SendMessageActionType => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;