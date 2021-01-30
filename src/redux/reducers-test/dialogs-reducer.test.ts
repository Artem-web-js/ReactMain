import dialogsReducer, {updateNewMessageBodyCreator, sendMessageCreator} from "../dialogs-reducer";
import {messagePageType} from "../store";

let startState: messagePageType

beforeEach(() => {
    startState = {
        messageData: [
            {id: 1, message: "Hi! How are you?"},
            {id: 2, message: "I'm fine! How about you?"},
            {id: 3, message: "I'm okay. What are you doing this night?"},
            {id: 4, message: "I going to do home tasks."},
            {id: 5, message: "How about to go to the cinema?"}
        ],
        newMessageBody: ""
    }
})


test("message data should update", () => {
    let body = 'Do you know Ract component?'

    let endState = dialogsReducer(startState, updateNewMessageBodyCreator(body))

    expect(startState.newMessageBody).toBe("")
    expect(endState.newMessageBody).toBe('Do you know Ract component?')
})

test("message data should be sent", () => {
    let endState = dialogsReducer(startState, sendMessageCreator())

    expect(startState.messageData.length).toBe(5)
    expect(endState.messageData.length).toBe(6)
    expect(endState.newMessageBody).toBe("")
})