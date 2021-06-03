import {NavLink} from "react-router-dom";
import React from "react";
import c from './Ffiend.module.css'

export type FriendType = {
    id: number
    src: string
    name: string
}

export const Friend = ({id, name, src}: FriendType) => {
    return (
        <div className={c.block}>
            <NavLink to={'/dialogs/' + id}>
                <img
                    src={src}
                    alt="avatar"/>
                {name}
            </NavLink>
        </div>
    )
}