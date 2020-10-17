import React from 'react';
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost} from "../REDUX/state";

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type MyPostsType = {
    posts: Array<PostsType>
    addPostCallback: (message: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const Profile = (props: MyPostsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText} addPostCallback={addPost}/>
        </div>
    )
}

export default Profile;