import {NavLink} from "react-router-dom";
import React from "react";
import c from './Ffiend.module.css'

export type FriendType = {
    id: number
    src: string
    name: string
}

export const Friend = (props: FriendType) => {
    return (
        <div className={c.block}>
            <NavLink to={'/dialogs/' + props.id}>
                <img
                    src={props.src}
                    alt="avatar"/>
                {props.name}
            </NavLink>
        </div>
    )
}