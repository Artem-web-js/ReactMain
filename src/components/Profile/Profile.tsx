import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StoreType} from "../REDUX/store";

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type MyPostsContainerType = {
    store: StoreType
}

const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;