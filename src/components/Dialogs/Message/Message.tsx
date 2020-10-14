import c from "../Dialogs.module.css";
import React from "react";

export type MessageProps = {
    id: number
    message: string
}

export const Message = (props: MessageProps) => {
    return (
        <div className={c.message}>
            {props.message}
        </div>
    )
}