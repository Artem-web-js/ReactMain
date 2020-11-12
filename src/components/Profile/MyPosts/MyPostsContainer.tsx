import React from 'react';
import {MyPostsContainerType} from '../Profile';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../REDUX/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props: MyPostsContainerType) => {
    const store = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text: string) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    };

    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={store.profilePage.posts}
                     newPostText={store.profilePage.newPostText}/>)
}

export default MyPostsContainer;