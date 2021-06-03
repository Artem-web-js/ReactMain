import React from "react";
import s from "./Users.module.css";
import {UsersItemsType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/userPhotoANotFound.png";

type UserProps = {
    followingInProgress: Array<number>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    user: UsersItemsType
}

let User = React.memo(({user, follow, unfollow, followingInProgress}: UserProps) => {

    return <div>
                <span>
                    <div className={s.usersPhoto}>
                        <NavLink to={"/profile/" + user.id}>
                        <img
                            src={user.photos.small != null ? user.photos.small : userPhoto}
                            alt="userPhoto"/>
                        </NavLink>
                    </div>
                    <div>

                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }}>Unfollow</button>

                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }}>Follow</button>}

                    </div>
                </span>
        <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
    </div>
})

export default User;