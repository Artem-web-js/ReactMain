import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {userAPI} from "../../api/api";

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & MapDispatchTypeProfileContainer & MapStatePropsType

type MapDispatchTypeProfileContainer = {
    getUserProfile: (userId: string) => void   //should fix any
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
        this.props.getUserProfile(userId)
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

export default connect(mapStateToProps, {getUserProfile}) (withUrlDataContainerComponent);