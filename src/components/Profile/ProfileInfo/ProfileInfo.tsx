import React from 'react';
import c from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userAvatar from "../../../assets/userPhotoANotFound.png"

const ProfileInfo = (props: any) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={c.content}>
                <img src="https://www.inpixio.com/wp-content/uploads/2019/11/Hero-inPixio-Photo-Editor.jpg"
                     alt="background photo"/>
            </div>
            <div className={c.profileDescriptionBlock}>
                    <img className={c.profileImage} src={props.profile.photos.large ? props.profile.photos.large : userAvatar}/>
                <div className={c.profileDescription}>
                    <p>Имя: {props.profile.fullName}</p>
                    <p>Обо мне: {props.profile.aboutMe}</p>
                    <p>Поиск работы: {props.profile.lookingForAJob ? "open to work" : "I have job"}</p>
                    <p>Работа: {props.profile.lookingForAJobDescription}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;