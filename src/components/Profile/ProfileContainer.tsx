import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {UsersItemsType} from "../../redux/users-reducer";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import { withRouter, RouteComponentProps } from 'react-router-dom';

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & MapDispatchTypeProfileContainer & MapStatePropsType

type MapDispatchTypeProfileContainer = {
    setUserProfile: (profile: any) => void   //should fix any
}
type MapStatePropsType = {
    profile: any
}

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = "12407"
        }
        axios
            .get<{ items: Array<UsersItemsType>, totalCount: number }>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response) => {
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        return (
            <div>
                <Profile {...this.props} pfofile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile}) (withUrlDataContainerComponent);