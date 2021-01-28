import React from 'react';
import c from'./Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props: any) => {
    return (
        <header className={c.header}>
            <img src="https://www.freelogodesign.org/Content/img/logo-samples/flooop.png" alt="logo"/>
            <div className={c.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'} className={c.login}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;