import React from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import style from "../common/FormsControls/FormsControls.module.css"

export type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    logout: () => void
    isAuth: boolean
}

type OwnProps = {}
type PropsType  = InjectedFormProps<FormDataType, OwnProps>
const LoginForm = (props: PropsType) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                       name={'email'}
                       component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'password'}
                       name={'password'}
                       type={'password'}
                       component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field component={'input'}
                       name={'rememberMe'}
                       type={'checkbox'}/>remember me
            </div>
            {
                props.error && <div className={style.formSummaryError}>
                    {props.error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login, logout})(Login);