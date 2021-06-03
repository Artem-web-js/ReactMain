import React from 'react';
import c from './Post.module.css';

type PostUser = {
    message: string
    like: number
}

const Post = ({message, like}: PostUser) => {
    return (
        <div className={c.item}>
            <img
                src="https://www.pinkvilla.com/files/styles/gallery-section/public/mouni_roys_these_stunning_photos_will_leave_you_spellbound_check_it_out.jpg?itok=h_J5SVj3"
                alt="usersPhoto"/>
            <span>{message}</span>
            <div className={c.likesCount}><img
                src="https://lh3.googleusercontent.com/i0mKBU9rHdZX1UOb6OOGIQ3HJweX2__QGYUW8bzaiVfg32KaXdPoDLnvcFfrhFHjYIQ"
                alt="like"/>{like}</div>
        </div>
    )
}

export default Post;