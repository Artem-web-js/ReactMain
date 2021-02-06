import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & MapDispatchTypeProfileContainer & MapStatePropsType

type MapDispatchTypeProfileContainer = {
    getUserProfile: (userId: string) => void   //should fix any
}

type MapStatePropsType = {
    profile: any
    isAuth: boolean
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

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfile}) (withUrlDataContainerComponent);