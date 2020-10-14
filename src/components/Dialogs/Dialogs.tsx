import React from "react";
import c from './Dialogs.module.css'
import {DialogItem, DialogsItemProps} from "./DialogItem/DialogItem";
import {Message, MessageProps} from "./Message/Message";

type DialogsType = {
    dialogsData: Array<DialogsItemProps>
    messageData: Array<MessageProps>
}

const Dialogs = (props: DialogsType) => {

    let dialogs = props.dialogsData.map(d => <DialogItem id={d.id} name={d.name} src={d.src}/>)
    let messages = props.messageData.map(m => <Message id={m.id} message={m.message}/>)

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogs}
            </div>
            <div className={c.messages}>
                {messages}
                <textarea></textarea>
                <button>Add message</button>
            </div>

        </div>
    )
}

export default Dialogs;