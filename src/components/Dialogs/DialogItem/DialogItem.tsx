import c from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export type DialogsItemProps = {
    name: string
    id: number
    src: string
}

export const DialogItem = (props: DialogsItemProps) => {
    return (
        <div className={c.dialog + ' ' + c.active}>
            <NavLink to={'/dialogs/' + props.id}>
                <img
                    src={props.src}
                    alt="avatar"/>
                {props.name}
            </NavLink>
        </div>
    )
}