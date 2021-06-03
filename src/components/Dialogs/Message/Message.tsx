import c from "../Dialogs.module.css";
import React from "react";

export type MessageProps = {
    id: number
    message: string
}

export const Message = ({message}: MessageProps) => {
    return (
        <div className={c.message}>
            {message}
        </div>
    )
}