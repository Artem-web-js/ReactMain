import React, {RefObject, ChangeEvent} from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from '../Profile';
import {ChangeNewTextActionType, AddPostActionType, addPostActionCreator, updateNewPostTextActionCreator} from "../../REDUX/profile-reducer";

type MyPostsType = {
    posts: Array<PostsType>
    dispatch: (action: ChangeNewTextActionType | AddPostActionType) => void
    newPostText: string
    // updateNewPostText: (newText: string) => void
}

const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map((p) => <Post message={p.message} like={p.likesCount}/>)

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };

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