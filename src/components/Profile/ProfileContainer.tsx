import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {UsersItemsType} from "../REDUX/users-reducer";
import {connect} from "react-redux";
import {setUserProfile} from "../REDUX/profile-reducer";
import {AppStateType} from "../REDUX/redux-store";

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type MapDispatchTypeProfileContainer = {
    setUserProfile: (profile: any) => void   //should fix any
}

class ProfileContainer extends React.Component<MapDispatchTypeProfileContainer> {
    componentDidMount() {
        axios
            .get<{ items: Array<UsersItemsType>, totalCount: number }>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((response) => {
                this.props.setUserProfile(response.data)
            });
    }
    //почему при написанни props.profile
    //выдает ошибку? а с props.children всё ок
    render() {
        return (
            <div>
                <Profile {...this.props} pfofile={this.props.children}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);