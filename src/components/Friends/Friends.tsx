import React from 'react';
import {Friend, FriendType} from "./Friend/Friend";
import c from './Friends.module.css'

type FriendsType = {
    sidebar: Array<FriendType>
}

const Friends = ({sidebar}: FriendsType) => {
    let friends = sidebar.map(f => <Friend id={f.id} src={f.src} name={f.name}/>)
    return (
        <div className={c.wrapper}>
            <h2>Friends</h2>
            <div>
                {friends}
            </div>
        </div>
    )
}

export default Friends;