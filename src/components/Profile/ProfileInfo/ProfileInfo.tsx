import React from "react";
import c from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userAvatar from "../../../assets/userPhotoANotFound.png";

const ProfileInfo = (props: any) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={c.profileDescriptionBlock}>
                <img className={c.profileImage}
                     src={props.profile.photos.large ? props.profile.photos.large : userAvatar} alt="profile"/>
                     <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
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