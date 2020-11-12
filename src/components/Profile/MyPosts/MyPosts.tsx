import React, {ChangeEvent} from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from '../Profile';

type MyPostsType = {
    posts: Array<PostsType>
    newPostText: string
    updateNewPostText: (newText: string) => void
    addPost: () => void
}

const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map((p) => <Post message={p.message} like={p.likesCount}/>)

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.updateNewPostText(text);
    };

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea cols={40} rows={5} onChange={onPostChange} value={props.newPostText}/>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={c.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;