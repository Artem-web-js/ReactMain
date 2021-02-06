import React, {ChangeEvent} from "react";
import c from './Dialogs.module.css'
import {DialogItem, DialogsItemProps} from "./DialogItem/DialogItem";
import {Message, MessageProps} from "./Message/Message";

export type DialogsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    dialogsPage: Array<DialogsItemProps>
    messageData: Array<MessageProps>
    newMessageBody: string
}

const Dialogs = (props: DialogsType) => {
    let dialogs = props.dialogsPage.map(d => <DialogItem id={d.id} name={d.name} src={d.src}/>)
    let messages = props.messageData.map(m => <Message id={m.id} message={m.message}/>)
    let newMessageBody = props.newMessageBody;

    let onSentMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogs}
            </div>
            <div className={c.messages}>
                {messages}
                <div className={c.addMessageContainer}>
                    <textarea className={c.textarea}
                              value={newMessageBody}
                              onChange={onNewMessageChange}
                              placeholder={"Enter your message..."}> </textarea>
                    <button className={c.addMessage} onClick={onSentMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;