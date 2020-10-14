import React, {RefObject} from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from '../Profile';
import {DialogsItemProps} from "../../Dialogs/DialogItem/DialogItem";
import {MessageProps} from "../../Dialogs/Message/Message";

type MyPostsType = {
    posts: Array<PostsType>
    addPostCallback: (message: string) => void
}

const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map((p) => <Post message={p.message} like={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        if (newPostElement.current) {
            props.addPostCallback(newPostElement.current.value)
        }
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea cols={40} rows={5} ref={newPostElement}></textarea>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={c.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;