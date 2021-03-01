import React from 'react';
import Header from "./Header";
import { connect } from 'react-redux';
import {logout, StateAuthType} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component<MapDispatchAuthType, StateAuthType> {

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

type MapDispatchAuthType = {
    logout: () => void
}

export default connect(mapStateToProps, {logout})(HeaderContainer);