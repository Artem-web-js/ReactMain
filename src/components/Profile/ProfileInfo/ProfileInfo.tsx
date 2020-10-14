import React from 'react';
import c from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div className={c.content}>
                <img src="https://www.inpixio.com/wp-content/uploads/2019/11/Hero-inPixio-Photo-Editor.jpg"
                     alt="background photo"/>
            </div>
            Mail content
            <div>
                Avatar + Description
            </div>
        </div>
    )
}

export default ProfileInfo;