import React from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from '../Profile';
import {reduxForm, Field} from "redux-form";

type MyPostsType = {
    posts: Array<PostsType>
    newPostText: string
    addPost: (newPost: string) => void
}

const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map((p) => <Post message={p.message} like={p.likesCount}/>)

    const addNewPost = (value: any) => {
        debugger
        props.addPost(value.newPost)
    }

    return (
        <div>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={addNewPost}/>
            <div className={c.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'}
                   name={'newPost'}
                   placeholder={'Enter your message...'}/>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddPostForm)

export default MyPosts;