import React from "react";
import c from './Dialogs.module.css'
import {DialogItem, DialogsItemProps} from "./DialogItem/DialogItem";
import {Message, MessageProps} from "./Message/Message";
import {reduxForm, Field} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControls/FormsControls";

export type DialogsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: (newMessageBody: string) => void
    dialogsPage: Array<DialogsItemProps>
    messageData: Array<MessageProps>
    newMessageBody: string
}

const Dialogs = ({dialogsPage, messageData, sendMessage}: DialogsType) => {
    let dialogs = dialogsPage.map(d => <DialogItem id={d.id} name={d.name} src={d.src}/>)
    let messages = messageData.map(m => <Message id={m.id} message={m.message}/>)

    let addNewMessage = (value: any) => {
        sendMessage(value.newMessageBody)
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogs}
            </div>
            <div className={c.messages}>
                {messages}
                <div className={c.addMessageContainer}>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = ({handleSubmit}: any) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field className={c.textarea}
                   component={Textarea}
                   name={'newMessageBody'}
                   placeholder={'Enter your message...'}
                   validate={[required, maxLength50]}
            />
            <button className={c.addMessage}>Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;