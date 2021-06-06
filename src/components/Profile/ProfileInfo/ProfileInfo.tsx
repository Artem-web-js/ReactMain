import React from "react";
import c from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userAvatar from "../../../assets/userPhotoANotFound.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = React.memo(({profile, updateStatus, status}: any) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={c.profileDescriptionBlock}>
                <img className={c.profileImage}
                     src={profile.photos.large ? profile.photos.large : userAvatar} alt="profile"/>
                     <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <div className={c.profileDescription}>
                    <p>Имя: {profile.fullName}</p>
                    <p>Обо мне: {profile.aboutMe}</p>
                    <p>Поиск работы: {profile.lookingForAJob ? "open to work" : "I have job"}</p>
                    <p>Работа: {profile.lookingForAJobDescription}</p>
                </div>
            </div>
        </div>
    )
})

export default ProfileInfo;