import React from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from '../Profile';
import {reduxForm, Field} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import { Textarea } from '../../common/FormsControls/FormsControls';

type MyPostsType = {
    posts: Array<PostsType>
    newPostText: string
    addPost: (newPost: string) => void
}

const MyPosts = React.memo((props: MyPostsType) => {

    let postsElements = props.posts.map((p) => <Post message={p.message} like={p.likesCount}/>)

    const addNewPost = (value: any) => {
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
})

const maxLength10 = maxLengthCreator(10)

const AddPostForm = ({handleSubmit}: any) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field component={Textarea}
                   name={'newPost'}
                   placeholder={'Enter your message...'}
                   validate={[required, maxLength10]}
            />
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddPostForm)

export default MyPosts;