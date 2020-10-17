import React, {RefObject, ChangeEvent} from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from '../Profile';
import {DialogsItemProps} from "../../Dialogs/DialogItem/DialogItem";
import {MessageProps} from "../../Dialogs/Message/Message";

type MyPostsType = {
    posts: Array<PostsType>
    addPostCallback: (message: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map((p) => <Post message={p.message} like={p.likesCount}/>)

    let addPost = () => {
        props.addPostCallback(props.newPostText)
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea cols={40} rows={5} onChange={onPostChange} value={props.newPostText}/>
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