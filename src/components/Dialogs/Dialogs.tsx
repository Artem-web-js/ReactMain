import React from "react";
import c from './Dialogs.module.css'
import {DialogItem, DialogsItemProps} from "./DialogItem/DialogItem";
import {Message, MessageProps} from "./Message/Message";
import {reduxForm, Field} from "redux-form";

export type DialogsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: (newMessageBody: string) => void
    dialogsPage: Array<DialogsItemProps>
    messageData: Array<MessageProps>
    newMessageBody: string
}

const Dialogs = (props: DialogsType) => {
    let dialogs = props.dialogsPage.map(d => <DialogItem id={d.id} name={d.name} src={d.src}/>)
    let messages = props.messageData.map(m => <Message id={m.id} message={m.message}/>)

    let addNewMessage = (value: any) => {
        props.sendMessage(value.newMessageBody)
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

const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={c.textarea}
                   component={'textarea'}
                   name={'newMessageBody'}
                   placeholder={'Enter your message...'}/>
            <button className={c.addMessage}>Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;