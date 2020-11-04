import React from 'react';
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AddPostActionType, ChangeNewTextActionType} from "../REDUX/profile-reducer";

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type MyPostsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: AddPostActionType | ChangeNewTextActionType) => void
}

const Profile = (props: MyPostsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} newPostText={props.newPostText} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;