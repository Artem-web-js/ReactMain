import c from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export type DialogsItemProps = {
    name: string
    id: number
    src: string
}

export const DialogItem = ({id, src, name}: DialogsItemProps) => {
    return (
        <div className={c.dialog + ' ' + c.active}>
            <NavLink to={'/dialogs/' + id}>
                <img
                    src={src}
                    alt="avatar"/>
                {name}
            </NavLink>
        </div>
    )
}