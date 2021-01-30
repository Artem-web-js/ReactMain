import React from 'react';
import Header from "./Header";
import { connect } from 'react-redux';
import {getAuthUserData, StateAuthType} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component<MapDispatchAuthType, StateAuthType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }

}

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

type MapDispatchAuthType = {
    getAuthUserData: () => void
}

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);